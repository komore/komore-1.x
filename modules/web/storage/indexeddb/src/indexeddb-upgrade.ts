/**
 * IndexedDB upgrade
 */
export interface IndexedDBUpgrade {
  readonly idbDatabase: IDBDatabase;
  readonly newVersion: number;
  readonly oldVersion: number;
}
