import * as assert from 'assert';
import { Event } from './event';
import { SnapshotStrategy } from './snapshot-strategy';
import { SnapshotStrategySelectionType } from './snapshot-strategy-selection-type';
import {
  getAfterAtOrBeforeSequenceNumber,
  getFirstOrLastSequenceNumber,
  isFirstOrLastSelectionType
} from './snapshot-strategy-helpers';

/**
 * Creates a snapshot strategy that triggers a snapshot creation around a number of events threshold being reached
 * @param count Minimum number of events required before a snapshot should be created
 * @param selectionType Snapshot strategy selection type
 * @returns Snapshot strategy
 * @template S State type
 * @template E Event types
 */
export function snapshotOnCount<S, E extends Event<any, any>[]>(
  count: number,
  selectionType: SnapshotStrategySelectionType = SnapshotStrategySelectionType.LAST
): SnapshotStrategy<S, E> {
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
