import { defer } from '@komore/reactive';

import { fromIDBRequest } from '../request/from-idb-request';
import { type GetIndexedDBItemOptions } from './get-indexeddb-item-options';

/**
 * Creates a function that returns an IndexedDB item
 *
 * @param options Options
 * @returns Function that returns an IndexedDB item
 */
export function getIndexedDBItem<T>(
  options: GetIndexedDBItemOptions
): (key: IDBValidKey | IDBKeyRange) => Observable<T | undefined> {
  const { database, storeName } = options;

  return key =>
    defer(() => {
      const transaction = database.transaction(storeName, 'readonly');
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.get(key);
      return fromIDBRequest(request);
    });
}
