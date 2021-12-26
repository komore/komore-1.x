import { type Observable } from '@komore/reactive';
import { type IndexedDBMigration } from './indexeddb-migration';

/**
 * Creates an IndexedDB migration
 * @param version Version
 * @param script Script
 * @returns IndexedDB migration
 */
export function createIDBMigration(
  version: number,
  script: (idbDatabase: IDBDatabase) => Observable<void>
): IndexedDBMigration {
  return {
    version,
    script
  };
}
