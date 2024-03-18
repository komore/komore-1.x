import { type Event } from '@komore/event';
import { assert } from '@komore/runtime';

import { type EventWithStoreMetadata } from '../../metadata/event-with-store-metadata';
import { type EventStoreSnapshotStrategy } from './event-store-snapshot-strategy';
import { type EventStoreSnapshotStrategySelectionType } from './event-store-snapshot-strategy-selection-type';
import { getAfterAtOrBeforeSequenceNumber } from './get-after-at-or-before-sequence-number';
import { getFirstOrLastSequenceNumber } from './get-first-or-last-sequence-number';
import { isFirstOrLastSelectionType } from './is-first-or-last-selection-type';

/**
 * Creates an event store snapshot strategy that triggers a snapshot creation around a size threshold being reached
 *
 * @param bytes Number of bytes that triggers the snapshot creation
 * @param selectionType Snapshot strategy selection type
 * @returns Snapshot strategy
 * @template AggregateType Snapshot type
 * @template EventType Event types
 */
export function snapshotOnSize<AggregateType, EventType extends Event>(
  bytes: number,
  selectionType: EventStoreSnapshotStrategySelectionType = 'last'
): EventStoreSnapshotStrategy<AggregateType, EventType> {
  assert(bytes > 0, 'a snapshot on size strategy must have a threshold strictly greater than 0 bytes');

  return eventsWithMetadata => {
    const fullSize = eventsWithMetadata.reduce((acc, { metadata: { size } }) => acc + size, 0);

    if (fullSize < bytes) {
      return false;
    }

    if (isFirstOrLastSelectionType(selectionType)) {
      return getFirstOrLastSequenceNumber(eventsWithMetadata, selectionType);
    } else {
      const [, index] = eventsWithMetadata.reduce(eventsWithMetadataToSizeAndIndex(bytes), [0, -1]);
      return getAfterAtOrBeforeSequenceNumber(eventsWithMetadata, selectionType, index);
    }
  };
}

function eventsWithMetadataToSizeAndIndex(
  bytes: number
): (
  sizeAndIndex: readonly [number, number],
  eventWithMetadata: EventWithStoreMetadata<Event>,
  index: number
) => readonly [number, number] {
  return ([sizeSum, index], { metadata }, i) =>
    bytes <= sizeSum ? ([sizeSum, index] as const) : ([sizeSum + metadata.size, i] as const);
}
