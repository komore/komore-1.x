import type { Observable } from '@komore/reactive';
import { defaultIfEmpty, EMPTY, expand, ignoreValues, of } from '@komore/reactive';
import type { IndexedDBUpgrade } from './indexeddb-upgrade';
import type { IndexedDBUpgradeHandler } from './indexeddb-upgrade-handler';

/**
 * Creates an IndexedDB upgrade handler
 * @param migrations Migrations
 * @returns IndexedDB upgrade handler
 */
export function createIndexedDBUpgradeHandler(
  migrations: ReadonlyArray<[version: number, migration: (idbDatabase: Observable<IDBDatabase>) => Observable<void>]>
): IndexedDBUpgradeHandler {
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
        const nextUpgrade: IndexedDBUpgrade = {
          idbDatabase,
          oldVersion: nextMigrationVersion,
          newVersion
        };

        return nextMigration(of(idbDatabase)).pipe(defaultIfEmpty(nextUpgrade));
      }),
      ignoreValues()
    );
}
