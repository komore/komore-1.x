import { type EventStoreSnapshot } from '../snapshot/event-store-snapshot';
import { type EventStoreSnapshotRepositoryLoadParameters } from './event-store-snapshot-repository-load-parameters';
import { type EventStoreSnapshotRepositoryStoreParameters } from './event-store-snapshot-repository-store-parameters';

/**
 * Event store snapshot repository
 *
 * @template AggregateType Aggregate type
 */
export interface EventStoreSnapshotRepository<AggregateType> {
  /**
   * Loads snapshots from the repository
   *
   * @param parameters Parameters
   * @returns Observable list of snapshots
   */
  loadSnapshots(
    parameters: EventStoreSnapshotRepositoryLoadParameters
  ): Observable<ReadonlyArray<EventStoreSnapshot<AggregateType> | undefined>>;
  /**
   * Stores snapshot in the repository
   *
   * @param parameters Parameters
   * @returns Observable that emits once the snapshots are stored
   */
  storeSnapshots(parameters: EventStoreSnapshotRepositoryStoreParameters<AggregateType>): Observable<void>;
}
