/**
 * Event store snapshot
 *
 * @template StateType State type
 */
export interface EventStoreSnapshot<StateType> {
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
  readonly state: StateType;
  /**
   * Timestamp
   */
  readonly timestamp: Temporal.Instant;
}
