/**
 * Event store metadata
 */
export interface EventStoreMetadata {
  /**
   * Aggregate key
   */
  readonly aggregateKey: string;
  /**
   * Sequence number
   */
  readonly sequenceNumber: number;
  /**
   * Event size
   */
  readonly size: number;
  /**
   * Event timestamp
   */
  readonly timestamp: Temporal.Instant;
}
