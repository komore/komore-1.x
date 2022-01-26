/**
 * Puts an IndexedDB item within the context of an IndexedDB transaction
 * @param idbTransaction IndexedDB transaction
 * @param storeName Store name
 * @param value Value
 * @param key Key
 */
export function putIndexedDBTransactionItem<T>(
  idbTransaction: IDBTransaction,
  storeName: string,
  value: T,
  key?: IDBValidKey
): void;

/**
 * Puts an IndexedDB item within the context of an IndexedDB transaction
 * @param idbObjectStore IndexedDB object store
 * @param value Value
 * @param key Key
 */
export function putIndexedDBTransactionItem<T>(idbObjectStore: IDBObjectStore, value: T, key?: IDBValidKey): void;

export function putIndexedDBTransactionItem<T>(
  idbTransactionOrObjectStore: IDBTransaction | IDBObjectStore,
  storeNameOrValue: string | T,
  valueOrKey?: T | IDBValidKey,
  key?: IDBValidKey
): void {
  if ('name' in idbTransactionOrObjectStore) {
    idbTransactionOrObjectStore.put(storeNameOrValue, valueOrKey as IDBValidKey | undefined);
  } else {
    idbTransactionOrObjectStore.objectStore(storeNameOrValue as string).put(valueOrKey, key);
  }
}
