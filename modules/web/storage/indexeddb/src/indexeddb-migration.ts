import type { Observable } from 'rxjs';

/**
 * IndexedDB migration
 */
export interface IndexedDBMigration {
  readonly version: number;
  readonly script: (idbDatabase: IDBDatabase) => Observable<void>;
}
