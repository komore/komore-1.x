/**
 * Put IndexedDB item options
 */
export interface PutIndexedDBItemOptions {
  /**
   * IndexedDB database
   */
  readonly database: IDBDatabase;
  /**
   * Store name
   */
  readonly storeName: string;
}
