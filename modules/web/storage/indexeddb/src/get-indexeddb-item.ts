import { fromIDBRequest } from './from-idb-request';

/**
 * Creates a function that returns an IndexedDB item
 *
 * @param idbDatabase IndexedDB database
 * @param storeName Store name
 * @param key Key
 * @returns The item matching the key, if found
 */
export function getIndexedDBItem<T>(
  idbDatabase: IDBDatabase,
  storeName: string
): (key: IDBValidKey | IDBKeyRange) => Observable<T | undefined> {
  const transaction = idbDatabase.transaction(storeName, 'readonly');
  const objectStore = transaction.objectStore(storeName);

  return key => {
    const idbRequest = objectStore.get(key);
    return fromIDBRequest(idbRequest);
  };
}
