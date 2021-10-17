import type { Observable } from '@komore/reactive';
import { concat, concatMap, defer, EMPTY, fromEvent, ignoreValues, map, of, race, shareReplay } from '@komore/reactive';
import { fromIDBOpenDBRequest } from './from-idb-open-db-request';
import type { IndexedDBUpgradeHandler } from './indexeddb-upgrade-handler';

/**
 * IndexedDB version upgrade event
 */
interface IDBVersionUpgradeEvent extends Event {
  readonly newVersion: number;
  readonly oldVersion: number;
}

/**
 * Creates an IndexedDB database
 * @param name Database name
 * @param version Database version
 * @param upgradeHandler Upgrade handler
 * @returns IndexedDB database
 */
export function createIndexedDBDatabase(
  name: string,
  version?: number,
  upgradeHandler?: IndexedDBUpgradeHandler
): Observable<IDBDatabase> {
  return defer(() => {
    const idbOpenDBRequest = indexedDB.open(name, version);
    const idbOpenDBRequest$ = fromIDBOpenDBRequest(idbOpenDBRequest);
    const idbDatabase = idbOpenDBRequest.result;
    const databaseUpgraded$ =
      upgradeHandler !== undefined
        ? fromEvent<IDBVersionUpgradeEvent>(idbOpenDBRequest, 'upgradeneeded').pipe(
            map(({ newVersion, oldVersion }) => ({
              idbDatabase,
              newVersion,
              oldVersion
            })),
            concatMap(databaseUpgrade => upgradeHandler(of(databaseUpgrade)).pipe(ignoreValues()))
          )
        : EMPTY;
    return race([idbOpenDBRequest$, concat([databaseUpgraded$, idbOpenDBRequest$])]);
  }).pipe(shareReplay({ bufferSize: 1, refCount: true }));
}
