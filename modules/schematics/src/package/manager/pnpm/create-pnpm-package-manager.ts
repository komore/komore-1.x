import { arrayToFlattenedArray } from '@komore/array';
import { isDefined, objectToEntries } from '@komore/functional';
import { jsonToObject } from '@komore/json';
import { cache, map, mapEach, of, redactValue, throwUnless, type Observable } from '@komore/reactive';
import { executeChildProcess } from '@komore/runtime/node';
import { type ReadonlyRecord } from '@komore/typescript';
import { type InstalledPackage } from '../../installed-package';
import { type PackageName } from '../../package-name';
import { type PackageDependencyType } from '../package-dependency-type';
import { type PackageManager } from '../package-manager';
import { getPnpmVersion } from './get-pnpm-version';

/**
 * Creates a pnpm package manager
 *
 * @param basePath Base path
 * @returns Package manager
 */
export function createPnpmPackageManager(basePath: string): Observable<PackageManager> {
  const version = getPnpmVersion(basePath).pipe(cache());
  const pnpmDependencyTypes: ReadonlyRecord<PackageDependencyType, string> = {
    development: 'dev',
    optional: 'optional',
    peer: 'peer',
    production: 'prod',
  };

  const packageManager: PackageManager = {
    version,
    install: () => executeChildProcess('pnpm install --frozen', { cwd: basePath }).pipe(redactValue()),
    addPackage: (packageName, packageVersion, type) => {
      const pnpmDependencyType = pnpmDependencyTypes[type];
      const pnpnDependencyTypeFlag = `--save-${pnpmDependencyType}`;
      const commandLine = `pnpm add ${packageName}@${packageVersion} ${pnpnDependencyTypeFlag}`;
      return executeChildProcess(commandLine, { cwd: basePath }).pipe(redactValue());
    },
    removePackage: packageName =>
      executeChildProcess(`pnpm remove ${packageName}`, { cwd: basePath }).pipe(redactValue()),
    listPackages: () =>
      executeChildProcess(`pnpm list --json`, { cwd: basePath }).pipe(
        map(output => output.stdout),
        map(jsonToObject<ReadonlyArray<PnpmListJson>>()),
        map(list => list[0]),
        throwUnless(isDefined, () => new Error('TODO: error for unknown json output')),
        map(({ dependencies, devDependencies, optionalDependencies, peerDependencies }) => [
          { dependencies: devDependencies ?? {}, type: 'development' as const },
          { dependencies: optionalDependencies ?? {}, type: 'optional' as const },
          { dependencies: peerDependencies ?? {}, type: 'peer' as const },
          { dependencies: dependencies ?? {}, type: 'production' as const },
        ]),
        mapEach(pnpmDependencyGroupToInstalledPackages),
        map(arrayToFlattenedArray())
      ),
  };

  return of(packageManager);
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
