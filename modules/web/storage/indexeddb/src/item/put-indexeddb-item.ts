import { defer } from '@komore/reactive';

import { fromIDBRequest } from '../request/from-idb-request';
import { type PutIndexedDBItemOptions } from './put-indexeddb-item-options';

/**
 * Creates a function that puts an IndexedDB item
 *
 * This helper function creates a read/write transaction and writes the object to the specified object store.
 *
 * When writing multiple objects, using `putIndexedDBTransactionItem` offers better performance.
 *
 * @param options Options
 * @returns Function that puts an IndexedDB item
 */
export function putIndexedDbItem<T>(
  options: PutIndexedDBItemOptions
): (value: T, key?: IDBValidKey) => Observable<IDBValidKey> {
  const { database, storeName } = options;

  return (value, key) =>
    defer(() => {
      const transaction = database.transaction(storeName, 'readwrite');
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.put(value, key);
      return fromIDBRequest(request);
    });
}
