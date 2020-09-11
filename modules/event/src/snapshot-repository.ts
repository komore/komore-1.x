import { Snapshot } from './snapshot';

/**
 * Snapshot repository
 * @template S State type
 */
export interface SnapshotRepository<S> {
  /**
   * Loads a snapshot from the repository
   * @param aggregateKeys List of aggregate keys
   * @returns Promise that resolves to a list of snapshots
   */
  loadSnapshot(aggregateKey: string): Promise<Snapshot<S> | undefined>;

  /**
   * Saves a snapshot to the repository
   * @param snapshot List of snapshots
   * @returns Promise that resolves once the snapshots are saved
   */
  saveSnapshot(snapshot: Snapshot<S>): Promise<void>;
}
