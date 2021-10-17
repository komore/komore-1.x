import type { Observable } from '@komore/reactive';
import { defer } from '@komore/reactive';
import { fromIDBRequest } from './from-idb-request';
import type { IDBKey } from './idb-key';

/**
 * Puts an IndexedDB item
 *
 * This helper function creates a read/write transaction and writes the object to the specified object store.
 *
 * When writing multiple objects, using `putIndexedDBTransactionItem` offers better performance.
 * @param idbDatabase IndexedDB database
 * @param storeName Store name
 * @param value Value
 * @param key Key
 * @returns Observable that emits the key when the operation completes
 */
export function putIndexedDBItem<T>(
  idbDatabase: IDBDatabase,
  storeName: string,
  value: T,
  key?: IDBKey
): Observable<IDBValidKey> {
  return defer(() => {
    const transaction = idbDatabase.transaction(storeName, 'readwrite');
    const objectStore = transaction.objectStore(storeName);
    const request = objectStore.put(value, key);
    return fromIDBRequest(request);
  });
}
