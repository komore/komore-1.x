import { Observable } from 'rxjs';
import { IDBMigration } from './idb-migration';

/**
 * Creates an IndexedDB migration
 * @param version Version
 * @param script Script
 * @returns IndexedDB migration
 */
export function createIDBMigration(version: number, script: (idbDatabase: IDBDatabase) => Observable<void>): IDBMigration {
  return {
    version,
    script
  };
}
