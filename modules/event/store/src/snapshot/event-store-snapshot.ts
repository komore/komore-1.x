/**
 * Event store snapshot
 *
 * @template AggregateType Aggregate type
 */
export interface EventStoreSnapshot<AggregateType> {
  /**
   * Aggregate key
   */
  readonly aggregateKey: string;
  /**
   * Sequence number
   */
  readonly sequenceNumber: number;
  /**
   * State type
   */
  readonly state: AggregateType;
  /**
   * Timestamp
   */
  readonly timestamp: Temporal.Instant;
}
