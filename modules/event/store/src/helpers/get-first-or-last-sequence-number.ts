import type { Event, EventWithMetadata } from '@komore/event';
import { SnapshotStrategySelectionType } from '../snapshot-strategy-selection-type';

/**
 * Gets an event sequence number from a list of events for `FIRST` and `LAST` selection types
 * @param events List of events
 * @param selectionType Selection type
 * @returns Sequence number
 * @template EventTypes Event types
 */
export function getFirstOrLastSequenceNumber<EventTypes extends Event<any, any>[]>(
  eventsWithMetadata: ReadonlyArray<EventWithMetadata<EventTypes>>,
  selectionType: SnapshotStrategySelectionType.FIRST | SnapshotStrategySelectionType.LAST
): number {
  if (selectionType === SnapshotStrategySelectionType.LAST) {
    return eventsWithMetadata[eventsWithMetadata.length - 1].metadata.sequenceNumber;
  }

  return eventsWithMetadata[0].metadata.sequenceNumber;
}
