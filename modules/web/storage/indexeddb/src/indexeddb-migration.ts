import { type Observable } from '@komore/reactive';

/**
 * IndexedDB migration
 */
export interface IndexedDBMigration {
  readonly version: number;
  readonly script: (idbDatabase: IDBDatabase) => Observable<void>;
}
