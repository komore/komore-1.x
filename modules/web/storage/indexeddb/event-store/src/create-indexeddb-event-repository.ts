import { type GenericEvent } from '@komore/event';
import { type EventStoreEventRepository } from '@komore/event/store';
import { cache, first, ignoreValues } from '@komore/reactive';
import { createIndexedDBDatabase, type IndexedDBDatabaseOptions } from '@komore/web/storage/indexeddb';

/**
 * Creates an IndexedDB event repository
 *
 * @param options Options
 * @returns IndexedDB event repository
 */
export function createIndexedDBEventRepository<EventTypes extends GenericEvent[]>(
  options: IndexedDBDatabaseOptions
): EventStoreEventRepository<EventTypes> {
  const database$ = createIndexedDBDatabase(options).pipe(cache());

  return {
    loadEvents: (_aggregateKey, _sequenceStart, _sequenceEnd) => {
      return database$.pipe(first(), ignoreValues());
    },
    storeEvents: (_aggregateKey, _events) => {
      return database$.pipe(first(), ignoreValues());
    },
  };
}
