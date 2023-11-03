import { type Event } from '@komore/event';
import { assert } from '@komore/runtime';

import { type EventStoreSnapshotStrategy } from './event-store-snapshot-strategy';
import { type EventStoreSnapshotStrategySelectionType } from './event-store-snapshot-strategy-selection-type';
import { getAfterAtOrBeforeSequenceNumber } from './get-after-at-or-before-sequence-number';
import { getFirstOrLastSequenceNumber } from './get-first-or-last-sequence-number';
import { isFirstOrLastSelectionType } from './is-first-or-last-selection-type';

/**
 * Creates a snapshot strategy that triggers a snapshot creation around a number of events threshold being reached
 *
 * @param count Minimum number of events required before a snapshot should be created
 * @param selectionType Snapshot strategy selection type
 * @returns Snapshot strategy
 * @template AggregateType Aggregate type
 * @template EventTypes Event types
 */
export function snapshotOnCount<AggregateType, EventTypes extends Event<string, Record<string, unknown> | undefined>[]>(
  count: number,
  selectionType: EventStoreSnapshotStrategySelectionType = 'last'
): EventStoreSnapshotStrategy<AggregateType, EventTypes> {
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
