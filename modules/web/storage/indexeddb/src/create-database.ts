import { concat, defer, EMPTY, fromEvent, Observable, of, race } from 'rxjs';
import { concatMap, ignoreElements, map, shareReplay } from 'rxjs/operators';
import { fromIDBOpenDBRequest } from './from-idb-open-db-request';
import { IDBUpgradeHandler } from './idb-upgrade-handler';

/**
 * IndexedDB version upgrade event
 */
interface IDBVersionUpgradeEvent extends Event {
  newVersion: number;
  oldVersion: number;
}

/**
 * Creates a database
 * @param name Database name
 * @param version Database version
 * @param upgradeHandler Upgrade handler
 * @returns Database
 */
export function createDatabase(
  name: string,
  version?: number,
  upgradeHandler?: IDBUpgradeHandler
): Observable<IDBDatabase> {
  return defer(() => {
    const idbOpenDBRequest = indexedDB.open(name, version);
    const idbOpenDBRequest$ = fromIDBOpenDBRequest(idbOpenDBRequest);
    const idbDatabase = idbOpenDBRequest.result;

    return race(
      idbOpenDBRequest$,
      concat(
        upgradeHandler !== undefined
          ? fromEvent<IDBVersionUpgradeEvent>(idbOpenDBRequest, 'upgradeneeded').pipe(
              map(({ newVersion, oldVersion }) => ({
                idbDatabase,
                newVersion,
                oldVersion
              })),
              concatMap(databaseUpgrade => upgradeHandler(of(databaseUpgrade)).pipe(ignoreElements()))
            )
          : EMPTY,
        idbOpenDBRequest$
      )
    );
  }).pipe(shareReplay({ bufferSize: 1, refCount: true }));
}
