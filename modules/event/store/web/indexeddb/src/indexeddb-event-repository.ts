import { type Event } from '@komore/event';
import { type EventRepository } from '@komore/event/store';
import { cache, take } from '@komore/reactive';
import { createIndexedDBDatabase, type IndexedDBDatabaseOptions } from '@komore/web/storage/indexeddb';

/**
 * Creates an IndexedDB event repository
 * @param options Options
 * @returns IndexedDB event repository
 */
export function indexedDBEventRepository<EventTypes extends Event<string, Record<string, unknown> | undefined>[]>(
  options: IndexedDBDatabaseOptions
): EventRepository<EventTypes> {
  const database$ = createIndexedDBDatabase(options).pipe(cache());

  return {
    loadEvents: (aggregateKey, sequenceStart, sequenceEnd) => {
      return database$.pipe(
        take(1)
      );
    },
    storeEvents: (aggregateKey, events) => {
      return database$.pipe(
        take(1)
      );
    }
  };
}
