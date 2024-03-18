import { type PutIndexedDBTransactionItemOptions } from './put-indexeddb-transaction-item-options';

/**
 * Creates a function that put IndexedDB item within the context of an IndexedDB transaction or object store
 *
 * @param options Options
 * @returns Function that put IndexedDB item within the context of an IndexedDB transaction or object store
 */
export function putIndexedDbTransactionItem<T>(
  options: PutIndexedDBTransactionItemOptions
): (value: T, key?: IDBValidKey) => void {
  if ('transaction' in options) {
    const { storeName, transaction } = options;
    return (value, key) => transaction.objectStore(storeName).put(value, key);
  } else {
    const { objectStore } = options;
    return (value, key) => objectStore.put(value, key);
  }
}
