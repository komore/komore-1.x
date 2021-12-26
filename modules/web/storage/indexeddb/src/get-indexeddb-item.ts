import { map, mergeMap, type Observable, of } from '@komore/reactive';
import { fromIDBRequest } from './from-idb-request';

/**
 * Gets an IndexedDB item
 * @param idbDatabase IndexedDB database
 * @param storeName Store name
 * @param key Key
 * @returns The item matching the key, if found
 */
export function getIndexedDBItem<T>(
  idbDatabase: IDBDatabase,
  storeName: string,
  key: IDBValidKey | IDBKeyRange
): Observable<T | undefined> {
  return of(idbDatabase).pipe(
    map(database => database.transaction(storeName, 'readwrite')),
    map(transaction => transaction.objectStore(storeName)),
    map(objectStore => objectStore.get(key) as IDBRequest<T | undefined>),
    mergeMap(fromIDBRequest)
  );
}
