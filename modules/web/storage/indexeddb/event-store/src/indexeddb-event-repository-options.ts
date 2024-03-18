/**
 * IndexedDB event repository options
 */
export interface IndexedDBEventRepositoryOptions {
  /**
   * Database
   */
  readonly database: IDBDatabase;
  /**
   * Store name
   */
  readonly storeName: string;
}
