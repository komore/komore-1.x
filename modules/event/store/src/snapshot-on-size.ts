import { type Event } from '@komore/event';
import { assert } from '@komore/runtime';
import { type SnapshotStrategy } from './snapshot-strategy';
import { getAfterAtOrBeforeSequenceNumber } from './helpers/get-after-at-or-before-sequence-number';
import { getFirstOrLastSequenceNumber } from './helpers/get-first-or-last-sequence-number';
import { isFirstOrLastSelectionType } from './helpers/is-first-or-last-selection-type';
import { type SnapshotStrategySelectionType } from './snapshot-strategy-selection-type';

/**
 * Creates a snapshot strategy that triggers a snapshot creation around a size threshold being reached
 * @param bytes Number of bytes that triggers the snapshot creation
 * @param selectionType Snapshot strategy selection type
 * @returns Snapshot strategy
 * @template S Snapshot type
 * @template E Event types
 */
export function snapshotOnSize<S, E extends Event<string, any>[]>(
  bytes: number,
  selectionType: SnapshotStrategySelectionType = 'last'
): SnapshotStrategy<S, E> {
  assert(bytes > 0, 'a snapshot on size strategy must have a threshold strictly greater than 0 bytes');

  return eventsWithMetadata => {
    const fullSize = eventsWithMetadata.reduce((acc, { metadata: { size } }) => acc + size, 0);

    if (fullSize < bytes) {
      return false;
    }

    if (isFirstOrLastSelectionType(selectionType)) {
      return getFirstOrLastSequenceNumber(eventsWithMetadata, selectionType);
    } else {
      let i: number;
      let sizeSum = 0;

      for (i = 0; i !== eventsWithMetadata.length; ++i) {
        sizeSum = sizeSum + eventsWithMetadata[i].metadata.size;
        if (bytes <= sizeSum) {
          break;
        }
      }

      return getAfterAtOrBeforeSequenceNumber(eventsWithMetadata, selectionType, i);
    }
  };
}
