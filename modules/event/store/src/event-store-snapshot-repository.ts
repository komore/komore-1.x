import { type EventStoreSnapshot } from './snapshot/event-store-snapshot';

/**
 * Event store snapshot repository
 * @template StateType State type
 */
export interface EventStoreSnapshotRepository<StateType> {
  /**
   * Loads snapshots from the repository
   *
   * @param aggregateKeys List of aggregate keys
   * @returns Observable list of snapshots
   */
  loadSnapshots(
    aggregateKeys: ReadonlyArray<string>
  ): Observable<ReadonlyArray<EventStoreSnapshot<StateType> | undefined>>;
  /**
   * Stores snapshot in the repository
   *
   * @param snapshot List of snapshots
   * @returns Observable that emits once the snapshots are stored
   */
  storeSnapshots(snapshots: ReadonlyArray<EventStoreSnapshot<StateType>>): Observable<void>;
}
