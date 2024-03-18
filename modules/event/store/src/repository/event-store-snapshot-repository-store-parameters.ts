import { type EventStoreSnapshot } from '../snapshot/event-store-snapshot';

/**
 * Event store snapshot repository store parameters
 *
 * @template AggregateType Aggregate type
 */
export interface EventStoreSnapshotRepositoryStoreParameters<AggregateType> {
  /**
   * Snapshots
   */
  readonly snapshots: ReadonlyArray<EventStoreSnapshot<AggregateType>>;
}
