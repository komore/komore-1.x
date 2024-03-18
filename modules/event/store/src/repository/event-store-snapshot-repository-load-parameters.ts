/**
 * Event store snapshot repository load parameters
 */
export interface EventStoreSnapshotRepositoryLoadParameters {
  /**
   * Aggregate keys
   */
  readonly aggregateKeys: ReadonlyArray<string>;
}
