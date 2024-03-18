/**
 * IndexedDB snapshot repository options
 */
export interface IndexedDBSnapshotRepositoryOptions {
  /**
   * Database
   */
  readonly database: IDBDatabase;
  /**
   * Store name
   */
  readonly storeName: string;
}
