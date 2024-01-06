import { type Observable } from '@komore/reactive';
import { concat, concatMap, defer, EMPTY, fromEvent, ignoreValues, map, of, race, shareReplay } from '@komore/reactive';

import { type IndexedDBDatabaseOptions } from './indexeddb-database-options';
import { fromIDBOpenDBRequest } from './from-idb-open-db-request';

/**
 * Creates an IndexedDB database
 *
 * @param name Database name
 * @param version Database version
 * @param upgradeHandler Upgrade handler
 * @returns IndexedDB database
 */
export function createIndexedDbDatabase(options: IndexedDBDatabaseOptions): Observable<IDBDatabase> {
  const { name, version, upgradeHandler } = options;

  return defer(() => {
    const idbOpenDBRequest = indexedDB.open(name, version);
    const idbOpenDBRequest$ = fromIDBOpenDBRequest(idbOpenDBRequest);
    const idbDatabase = idbOpenDBRequest.result;
    const databaseUpgraded$ =
      upgradeHandler !== undefined
        ? fromEvent<IDBVersionChangeEvent>(idbOpenDBRequest, 'upgradeneeded').pipe(
            map(({ newVersion, oldVersion }) => ({
              idbDatabase,
              // TODO: verify newVersion is not null as this would mean the DB is deleted
              newVersion: newVersion as number,
              oldVersion,
            })),
            concatMap(databaseUpgrade => upgradeHandler(of(databaseUpgrade)).pipe(ignoreValues()))
          )
        : EMPTY;
    return race([idbOpenDBRequest$, concat([databaseUpgraded$, idbOpenDBRequest$])]);
  }).pipe(shareReplay({ bufferSize: 1, refCount: true }));
}
