import { type Event } from '@komore/event';
import { type EventStoreEventRepository } from '@komore/event/store';
import { empty } from '@komore/reactive';

import { type IndexedDBEventRepositoryOptions } from './indexeddb-event-repository-options';

/**
 * Creates an IndexedDB event repository
 *
 * @param repositoryOptions Options
 * @returns IndexedDB event repository
 */
export function createIndexedDBEventRepository<EventTypes extends ReadonlyArray<Event>>(
  repositoryOptions: IndexedDBEventRepositoryOptions
): EventStoreEventRepository<EventTypes> {
  const { database, storeName } = repositoryOptions;
  return {
    loadEvents: (_aggregateKey, _sequenceStart, _sequenceEnd) => {
      const transaction = database.transaction(storeName, 'readonly');
      const objectStore = transaction.objectStore(storeName);
      objectStore;
      return empty;
    },
    storeEvents: (_aggregateKey, _events) => {
      const transaction = database.transaction(storeName, 'readwrite');
      const objectStore = transaction.objectStore(storeName);
      objectStore;
      return empty;
    },
  };
}
