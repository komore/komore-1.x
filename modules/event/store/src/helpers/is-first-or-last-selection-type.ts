import { SnapshotStrategySelectionType } from '../snapshot-strategy-selection-type';

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
