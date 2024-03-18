import { concat, concatMap, defer, empty, fromEvent, ignoreValues, map, of, race, shareReplay } from '@komore/reactive';

import { type IndexedDBDatabaseOptions } from './indexeddb-database-options';
import { fromIDBOpenDBRequest } from './request/from-idb-open-db-request';

/**
 * Creates an IndexedDB database
 *
 * @param databaseOptions IndexedDB database options
 * @returns IndexedDB database
 */
export function createIndexedDBDatabase(databaseOptions: IndexedDBDatabaseOptions): Observable<IDBDatabase> {
  const { name, version, upgradeHandler } = databaseOptions;

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
        : empty;
    return race([idbOpenDBRequest$, concat([databaseUpgraded$, idbOpenDBRequest$])]);
  }).pipe(shareReplay({ bufferSize: 1, refCount: true })); /* TODO: refCountDelay so it's not released right away */
}
