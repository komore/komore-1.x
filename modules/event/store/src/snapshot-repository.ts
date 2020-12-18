import { Observable } from 'rxjs';
import { Snapshot } from './snapshot';

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
   * Saves snapshot to the repository
   * @param snapshot List of snapshots
   * @returns Observable that resolves once the snapshots are saved
   */
  saveSnapshots(snapshots: ReadonlyArray<Snapshot<StateType>>): Observable<void>;
}
