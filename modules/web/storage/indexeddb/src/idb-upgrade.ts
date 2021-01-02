/**
 * IndexedDB upgrade
 */
export type IDBUpgrade = Readonly<{
  idbDatabase: IDBDatabase;
  newVersion: number;
  oldVersion: number;
}>;
