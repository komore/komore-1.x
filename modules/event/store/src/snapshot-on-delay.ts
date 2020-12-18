import * as assert from 'assert';
import { Event } from './event';
import { SnapshotStrategy } from './snapshot-strategy';
import {
  getAfterAtOrBeforeSequenceNumber,
  getFirstOrLastSequenceNumber,
  isFirstOrLastSelectionType
} from './snapshot-strategy-helpers';
import { SnapshotStrategySelectionType } from './snapshot-strategy-selection-type';

/**
 * Creates a snapshot strategy that triggers a snapshot creation around a delay threshold being reached
 * @param milliseconds Minimum number of milliseconds required before a snapshot should be created
 * @param selectionType Snapshot strategy selection type
 * @returns Snapshot strategy
 * @template S Snapshot type
 * @template E Event types
 */
export function snapshotOnDelay<S, E extends Event<any, any>[]>(
  milliseconds: number,
  selectionType: SnapshotStrategySelectionType = SnapshotStrategySelectionType.LAST
): SnapshotStrategy<S, E> {
  assert(milliseconds > 0, 'a snapshot on delay strategy must have a threshold strictly greater than 0 milliseconds');

  return (eventsWithMetadata, _, currentSnapshot) => {
    const earliestTimestamp = currentSnapshot?.timestamp || eventsWithMetadata[0].metadata.timestamp;
    const latestTimestamp = eventsWithMetadata[eventsWithMetadata.length - 1].metadata.timestamp;
    const maximumDelay = latestTimestamp.getTime() - earliestTimestamp.getTime();

    if (maximumDelay < milliseconds) {
      return false;
    }

    if (isFirstOrLastSelectionType(selectionType)) {
      return getFirstOrLastSequenceNumber(eventsWithMetadata, selectionType);
    } else {
      let i: number;

      for (i = 0; i !== eventsWithMetadata.length; ++i) {
        const delay = eventsWithMetadata[i].metadata.timestamp.getTime() - earliestTimestamp.getTime();
        if (milliseconds <= delay) {
          break;
        }
      }

      return getAfterAtOrBeforeSequenceNumber(eventsWithMetadata, selectionType, i);
    }
  };
}
