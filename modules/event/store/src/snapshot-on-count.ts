import type { Event } from '@komore/event';
import { assert } from '@komore/typescript';
import type { SnapshotStrategy } from './snapshot-strategy';
import { getAfterAtOrBeforeSequenceNumber } from './snapshot-strategy-helpers/get-after-at-or-before-sequence-number';
import { getFirstOrLastSequenceNumber } from './snapshot-strategy-helpers/get-first-or-last-sequence-number';
import { isFirstOrLastSelectionType } from './snapshot-strategy-helpers/is-first-or-last-selection-type';
import { SnapshotStrategySelectionType } from './snapshot-strategy-selection-type';

/**
 * Creates a snapshot strategy that triggers a snapshot creation around a number of events threshold being reached
 * @param count Minimum number of events required before a snapshot should be created
 * @param selectionType Snapshot strategy selection type
 * @returns Snapshot strategy
 * @template StateType State type
 * @template EventTypes Event types
 */
export function snapshotOnCount<StateType, EventTypes extends Event<any, any>[]>(
  count: number,
  selectionType: SnapshotStrategySelectionType = SnapshotStrategySelectionType.LAST
): SnapshotStrategy<StateType, EventTypes> {
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
