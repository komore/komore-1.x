import { EMPTY, Observable, of } from 'rxjs';
import { defaultIfEmpty, expand, ignoreElements } from 'rxjs/operators';
import { IDBUpgrade } from './idb-upgrade';
import { IDBUpgradeHandler } from './idb-upgrade-handler';

/**
 * Creates an IndexedDB upgrade handler
 * @param migrations Migrations
 * @returns IndexedDB upgrade handler
 */
export function createIDBUpgradeHandler(
  migrations: ReadonlyArray<[version: number, migration: (idbDatabase: Observable<IDBDatabase>) => Observable<void>]>
): IDBUpgradeHandler {
  const sortedMigrations = [...migrations];

  sortedMigrations.sort(([lhsVersion], [rhsVersion]) => lhsVersion - rhsVersion);

  return idbUpgrade =>
    idbUpgrade.pipe(
      expand(({ idbDatabase, oldVersion, newVersion }) => {
        const oldVersionIndex = sortedMigrations.findIndex(([version]) => version === oldVersion);
        if (oldVersionIndex === -1 && oldVersionIndex === sortedMigrations.length - 1) {
          return EMPTY;
        }

        const nextVersionIndex = oldVersionIndex + 1;
        const [nextMigrationVersion, nextMigration] = sortedMigrations[nextVersionIndex];
        const nextUpgrade: IDBUpgrade = {
          idbDatabase,
          oldVersion: nextMigrationVersion,
          newVersion
        };

        return nextMigration(of(idbDatabase)).pipe(defaultIfEmpty(nextUpgrade));
      }),
      ignoreElements()
    );
}
