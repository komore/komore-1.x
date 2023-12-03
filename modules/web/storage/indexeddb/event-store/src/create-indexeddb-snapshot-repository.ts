import { type EventStoreSnapshotRepository } from '@komore/event/store';
import { of } from '@komore/reactive';

/**
 * Creates an IndexedDB snapshot repository
 *
 * @returns IndexedDB snapshot repository
 * @template StateType State type
 */
export function createIndexedDBSnapshotRepository<StateType>(): EventStoreSnapshotRepository<StateType> {
  return {
    loadSnapshots: _aggregateKeys => of([]),
    storeSnapshots: _snapshots => of(void 0),
  };
}
