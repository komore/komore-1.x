import { type EventStoreSnapshotStrategySelectionType } from './event-store-snapshot-strategy-selection-type';

/**
 * Tests whether an event store strategory selection type is `first` or `last`
 *
 * @param selectionType Selection type
 * @returns true if the selection type is `first` or `last`
 */
export function isFirstOrLastSelectionType(
  selectionType: EventStoreSnapshotStrategySelectionType
): selectionType is Extract<EventStoreSnapshotStrategySelectionType, 'first' | 'last'> {
  return selectionType === 'first' || selectionType === 'last';
}
