import { Event } from './event';
import { EventWithMetadata } from './event-metadata';
import { SnapshotStrategySelectionType } from './snapshot-strategy-selection-type';

/**
 * Tests whether a selection type is a `FIRST` or `LAST` selection type
 * @param selectionType Selection type
 * @returns true if the selection type is `FIRST` or `LAST`
 */
export function isFirstOrLastSelectionType(
  selectionType: SnapshotStrategySelectionType
): selectionType is SnapshotStrategySelectionType.FIRST | SnapshotStrategySelectionType.LAST {
  return selectionType === SnapshotStrategySelectionType.FIRST || selectionType === SnapshotStrategySelectionType.LAST;
}

/**
 * Gets an event sequence number from a list of events for `FIRST` and `LAST` selection types
 * @param events List of events
 * @param selectionType Selection type
 * @returns Sequence number
 * @template E Event types
 */
export function getFirstOrLastSequenceNumber<E extends Event<any, any>[]>(
  eventsWithMetadata: ReadonlyArray<EventWithMetadata<E>>,
  selectionType: SnapshotStrategySelectionType.FIRST | SnapshotStrategySelectionType.LAST
): number {
  if (selectionType === SnapshotStrategySelectionType.LAST) {
    return eventsWithMetadata[eventsWithMetadata.length - 1].metadata.sequenceNumber;
  }

  return eventsWithMetadata[0].metadata.sequenceNumber;
}

/**
 * Gets an event sequence number from a list of events and an index for `AFTER`, `AT` and `BEFORE` selection types
 * @param events List of events
 * @param selectionType Selection type
 * @param index Index where the base strategy condition was met
 * @returns Sequence number
 * @template E Event types
 */
export function getAfterAtOrBeforeSequenceNumber<E extends Event<any, any>[]>(
  eventsWithMetadata: ReadonlyArray<EventWithMetadata<E>>,
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
