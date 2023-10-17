import { arrayToElementAt, arrayToFlattenedArray, each } from '@komore/collection';
import { isDefined, objectToEntries } from '@komore/functional';
import { jsonToObject } from '@komore/json';
import { executeChildProcess } from '@komore/node';
import { map, throwUnless, type Observable } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

import { type InstalledPackage } from '../../installed-package';
import { type PackageName } from '../../name/package-name';
import { PackageDependencyType } from '../package-dependency-type';

export function listPnpmPackages(basePath: string): () => Observable<ReadonlyArray<InstalledPackage>> {
  const list = executeChildProcess(`pnpm list --json`, { cwd: basePath });
  return () =>
    list.pipe(
      map(output => output.stdout),
      map(jsonToObject<ReadonlyArray<PnpmListJson>>()),
      map(arrayToElementAt(0)),
      throwUnless(isDefined, () => new Error('TODO: error for unknown json output')),
      map(({ dependencies, devDependencies, optionalDependencies, peerDependencies }) => [
        { dependencies: devDependencies ?? {}, type: 'development' as const },
        { dependencies: optionalDependencies ?? {}, type: 'optional' as const },
        { dependencies: peerDependencies ?? {}, type: 'peer' as const },
        { dependencies: dependencies ?? {}, type: 'production' as const },
      ]),
      map(each(pnpmDependencyGroupToInstalledPackages)),
      map(arrayToFlattenedArray())
    );
}

function pnpmDependencyGroupToInstalledPackages(dependencyGroup: PnpmDependencyGroup): ReadonlyArray<InstalledPackage> {
  const { type, dependencies } = dependencyGroup;
  return objectToEntries(dependencies).map(pnpmDependencyJsonToInstalledPackage(type));
}

function pnpmDependencyJsonToInstalledPackage(
  dependencyType: PackageDependencyType
): (entry: readonly [name: PackageName, dependencyJson: PnpmDependencyJson]) => InstalledPackage {
  return ([name, { from, version }]) => ({
    dependencyType,
    name,
    path: `node_modules/${from}`,
    version,
  });
}

/**
 * pnpm list JSON
 */
interface PnpmListJson {
  readonly name: string;
  readonly path: string;
  readonly private: boolean;
  readonly version: string;
  readonly dependencies?: ReadonlyRecord<string, PnpmDependencyJson>;
  readonly devDependencies?: ReadonlyRecord<string, PnpmDependencyJson>;
  readonly optionalDependencies?: ReadonlyRecord<string, PnpmDependencyJson>;
  readonly peerDependencies?: ReadonlyRecord<string, PnpmDependencyJson>;
  readonly unsavedDependencies?: ReadonlyRecord<string, PnpmDependencyJson>;
}

/**
 * Dependency from a pnpm list JSON
 */
interface PnpmDependencyJson {
  readonly from: string;
  readonly resolved?: string;
  readonly version: string;
}

/**
 * Dependency group from a pnpm list JSON
 */
interface PnpmDependencyGroup {
  readonly dependencies: ReadonlyRecord<PackageName, PnpmDependencyJson>;
  readonly type: PackageDependencyType;
}
