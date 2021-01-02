import { Observable } from 'rxjs';

/**
 * IndexedDB migration
 */
export type IDBMigration = Readonly<{
  version: number;
  script: (idbDatabase: IDBDatabase) => Observable<void>;
}>;
