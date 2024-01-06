import { join } from 'node:path';

import { arrayToFlattenedArray } from '@komore/collection';
import { isDefined } from '@komore/functional';
import { readPackageJson } from '@komore/node/package';
import {
  cache,
  combineLatest,
  map,
  mergeMap,
  ObservableMap,
  switchMap,
  throwUnless,
  type Observable,
} from '@komore/reactive';
import { type TypeScriptConfiguration } from '@komore/typescript-compiler';

import { type InstalledPackage } from '../package/installed-package';
import { type InstalledPackageWithPackageJson } from '../package/installed-package-with-package-json';
import { type LocalPackage } from '../package/local-package';
import { type LocalPackageWithPackageJson } from '../package/local-package-with-package-json';
import { createPackageManager } from '../package/manager/create-package-manager';
import { packageManagerToPackageList } from '../package/manager/package-manager-to-package-list';
import { type PackageName } from '../package/name/package-name';
import { packageToPackageWithJson } from '../package/package-to-package-with-json';
import { typeScriptConfigurationToLocalPackages } from '../package/typescript-configuration-to-local-packages';
import { schematicsError } from '../schematics.error';
import { type WorkspaceConfiguration } from '../workspace/workspace-configuration';
import { buildWorkspaceContextPackageList } from './build-workspace-context-package-list';
import { type WorkspaceContextPackage } from './workspace-context-package';

/**
 * Returns a function that builds a workspace context package
 *
 * @param basePath Base path
 * @returns Function that builds a workspace context package
 */
export function buildWorkspaceContextPackage(
  basePath: string
): (
  tsConfigBase: Observable<TypeScriptConfiguration>,
  workspaceConfiguration: WorkspaceConfiguration
) => WorkspaceContextPackage {
  const packageJsonPath = join(basePath, 'package.json');
  const json = readPackageJson(packageJsonPath).pipe(cache());

  return (tsConfigBase, workspaceConfiguration) => {
    const manager = createPackageManager(basePath, workspaceConfiguration.package.manager).pipe(cache());
    const installed = manager.pipe(mergeMap(packageManagerToPackageList), cache());
    const local = tsConfigBase.pipe(mergeMap(typeScriptConfigurationToLocalPackages(basePath)), cache());
    const all = combineLatest([installed, local]).pipe(map(arrayToFlattenedArray()), cache());
    const byName = new ObservableMap(packageByName(all));
    const byNameWithPackageJson = new ObservableMap(packageWithPackageJsonByName(byName));
    const list = buildWorkspaceContextPackageList(all, installed, local, byNameWithPackageJson);

    return {
      byName,
      byNameWithPackageJson,
      json,
      list,
      manager,
    };
  };
}

/**
 * Creates a function that resolves a package name to a package's information
 *
 * @returns Function that resolves a package name to a package's information
 */
function packageByName(
  all$: Observable<ReadonlyArray<InstalledPackage | LocalPackage>>
): (packageName: PackageName) => Observable<InstalledPackage | LocalPackage> {
  return packageName =>
    all$.pipe(
      map(all => all.find(({ name }) => name === packageName)),
      throwUnless(isDefined, () => schematicsError.packageNotFound({ packageName })),
      mergeMap(packageToPackageWithJson)
    );
}

/**
 * Creates a function that resolves a package name to a package with its package.json
 *
 * @param byName Map of packages
 * @returns Function that resolves a package name to a package with its package.json
 */
function packageWithPackageJsonByName(
  byName: ObservableMap<PackageName, InstalledPackage | LocalPackage>
): (packageName: PackageName) => Observable<InstalledPackageWithPackageJson | LocalPackageWithPackageJson> {
  return packageName => byName.get(packageName).pipe(switchMap(packageToPackageWithJson));
}
