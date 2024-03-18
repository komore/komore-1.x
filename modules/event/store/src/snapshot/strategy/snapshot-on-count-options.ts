import { type EventStoreSnapshotStrategySelectionType } from './event-store-snapshot-strategy-selection-type';

/**
 * Snapshot on count options
 */
export interface SnapshotOnCountOptions {
  /**
   * Minimum number of events required before a snapshot should be created
   */
  readonly count: number;
  /**
   * Snapshot strategy selection type
   *
   * @default `last`
   */
  readonly selectionType?: EventStoreSnapshotStrategySelectionType;
}
