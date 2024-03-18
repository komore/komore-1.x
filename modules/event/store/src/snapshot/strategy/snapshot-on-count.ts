import { type Event } from '@komore/event';
import { assert } from '@komore/runtime';

import { type EventStoreSnapshotStrategy } from './event-store-snapshot-strategy';
import { getAfterAtOrBeforeSequenceNumber } from './get-after-at-or-before-sequence-number';
import { getFirstOrLastSequenceNumber } from './get-first-or-last-sequence-number';
import { isFirstOrLastSelectionType } from './is-first-or-last-selection-type';
import { type SnapshotOnCountOptions } from './snapshot-on-count-options';

/**
 * Creates a snapshot strategy that triggers a snapshot creation around a number of events threshold being reached
 *
 * @param options Snapshot on count options
 * @returns Snapshot strategy
 * @template AggregateType Aggregate type
 * @template EventTypes Event types
 */
export function snapshotOnCount<AggregateType, EventType extends Event>(
  options: SnapshotOnCountOptions
): EventStoreSnapshotStrategy<AggregateType, EventType> {
  const { count, selectionType = 'last' } = options;
  assert(count > 0, 'a snapshot on count strategy must have a threshold strictly greater than 0 events');

  return eventsWithMetadata => {
    const eventCount = eventsWithMetadata.length;

    if (eventCount < count) {
      return false;
    }

    if (isFirstOrLastSelectionType(selectionType)) {
      return getFirstOrLastSequenceNumber(eventsWithMetadata, selectionType);
    } else {
      return getAfterAtOrBeforeSequenceNumber(eventsWithMetadata, selectionType, count - 1);
    }
  };
}
