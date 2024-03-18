/**
 * Event store event repository load parameters
 */
export interface EventStoreEventRepositoryLoadParameters {
  /**
   * Aggregate key
   */
  readonly aggregateKey: string;
  /**
   * Sequence end
   */
  readonly sequenceEnd?: number;
  /**
   * Sequence start
   */
  readonly sequenceStart?: number;
}
