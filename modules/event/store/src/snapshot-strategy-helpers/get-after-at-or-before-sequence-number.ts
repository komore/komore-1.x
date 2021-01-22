import type { Event, EventWithMetadata } from '@komore/event';
import { SnapshotStrategySelectionType } from '../snapshot-strategy-selection-type';

/**
 * Gets an event sequence number from a list of events and an index for `AFTER`, `AT` and `BEFORE` selection types
 * @param events List of events
 * @param selectionType Selection type
 * @param index Index where the base strategy condition was met
 * @returns Sequence number
 * @template EventTypes Event types
 */
export function getAfterAtOrBeforeSequenceNumber<EventTypes extends Event<any, any>[]>(
  eventsWithMetadata: ReadonlyArray<EventWithMetadata<EventTypes>>,
  selectionType:
    | SnapshotStrategySelectionType.AFTER
    | SnapshotStrategySelectionType.AT
    | SnapshotStrategySelectionType.BEFORE,
  index: number
): number | false {
  switch (selectionType) {
    case SnapshotStrategySelectionType.AFTER:
      return index + 1 < eventsWithMetadata.length ? eventsWithMetadata[index + 1].metadata.sequenceNumber : false;
    case SnapshotStrategySelectionType.AT:
      return eventsWithMetadata[index].metadata.sequenceNumber;
    case SnapshotStrategySelectionType.BEFORE:
      return index > 0 ? eventsWithMetadata[index - 1].metadata.sequenceNumber : false;
  }
}
