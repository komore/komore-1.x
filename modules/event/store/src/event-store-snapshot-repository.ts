import { type Observable } from '@komore/reactive';
import { type Snapshot } from './snapshot';

/**
 * Snapshot repository
 * @template StateType State type
 */
export interface SnapshotRepository<StateType> {
  /**
   * Loads snapshots from the repository
   * @param aggregateKeys List of aggregate keys
   * @returns Observable list of snapshots
   */
  loadSnapshots(aggregateKeys: ReadonlyArray<string>): Observable<ReadonlyArray<Snapshot<StateType> | undefined>>;

  /**
   * Stores snapshot in the repository
   * @param snapshot List of snapshots
   * @returns Observable that emits once the snapshots are stored
   */
  storeSnapshots(snapshots: ReadonlyArray<Snapshot<StateType>>): Observable<void>;
}
