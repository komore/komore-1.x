/**
 * Event store snapshot
 *
 * @template AggregateType Aggregate type
 */
export interface EventStoreSnapshot<AggregateType> {
  readonly aggregateKey: string;
  readonly sequenceNumber: number;
  readonly state: AggregateType;
  readonly timestamp: Date;
}
