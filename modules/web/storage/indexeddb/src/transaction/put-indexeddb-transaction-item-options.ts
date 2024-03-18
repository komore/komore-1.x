/**
 * Put IndexedDB transaction item options
 */
export type PutIndexedDBTransactionItemOptions =
  | {
      /**
       * Store name
       */
      readonly storeName: string;
      /**
       * IndexedDB transaction
       */
      readonly transaction: IDBTransaction;
    }
  | {
      /**
       * IndexedDB object store
       */
      readonly objectStore: IDBObjectStore;
    };
