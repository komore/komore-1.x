/**
 * Get IndexedDB item options
 */
export interface GetIndexedDBItemOptions {
  /**
   * IndexedDB database
   */
  readonly database: IDBDatabase;
  /**
   * Store name
   */
  readonly storeName: string;
}
