import { type SnapshotRepository } from '@komore/event/store';

/**
 * Creates an IndexedDB snapshot repository
 * @returns IndexedDB snapshot repository
 * @template StateType State type
 */
export function indexedDBSnapshotRepository<StateType>(): SnapshotRepository<StateType> {
  return {
    loadSnapshots: aggregateKeys => {},
    saveSnapshots: snapshots => {}
  };
}
