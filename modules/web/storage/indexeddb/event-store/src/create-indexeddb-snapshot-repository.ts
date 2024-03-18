import { type EventStoreSnapshotRepository } from '@komore/event/store';
import { empty } from '@komore/reactive';

import { type IndexedDBSnapshotRepositoryOptions } from './indexeddb-snapshot-repository-options';

/**
 * Creates an IndexedDB snapshot repository
 *
 * @param repositoryOptions IndexedDB snapshot repository options
 * @returns IndexedDB snapshot repository
 * @template StateType State type
 */
export function createIndexedDBSnapshotRepository<StateType>(
  repositoryOptions: IndexedDBSnapshotRepositoryOptions
): EventStoreSnapshotRepository<StateType> {
  const { database, storeName } = repositoryOptions;
  database;
  storeName;
  return {
    loadSnapshots: _aggregateKeys => empty,
    storeSnapshots: _snapshots => empty,
  };
}
