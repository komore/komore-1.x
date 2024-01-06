import { each } from '@komore/collection';
import {
  cache,
  defaultIfEmpty,
  forkJoin,
  map,
  mergeMap,
  ObservableMap,
  switchMap,
  type Observable,
} from '@komore/reactive';

import { type InstalledPackage } from '../package/installed-package';
import { type InstalledPackageWithPackageJson } from '../package/installed-package-with-package-json';
import { type LocalPackage } from '../package/local-package';
import { type LocalPackageWithPackageJson } from '../package/local-package-with-package-json';
import { type PackageName } from '../package/name/package-name';
import { type WorkspaceContextPackage } from './workspace-context-package';
import { localPackageToPackageName } from '../package/local-package-to-package-name';

/**
 * Builds a workspace context package list
 *
 * @param all All packages
 * @param installed Installed packages
 * @param local Local packages
 * @param byNameWithPackageJson Map of packages with their package.json
 * @returns Workspace context package list
 */
export function buildWorkspaceContextPackageList(
  all: Observable<ReadonlyArray<InstalledPackage | LocalPackage>>,
  installed: Observable<ReadonlyArray<InstalledPackage>>,
  local: Observable<ReadonlyArray<LocalPackage>>,
  byNameWithPackageJson: ObservableMap<PackageName, InstalledPackageWithPackageJson | LocalPackageWithPackageJson>
): WorkspaceContextPackage['list'] {
  // TODO: this is bad, should be done through the existing maps
  const allWithPackageJson = all.pipe(
    map(each(localPackageToPackageName)),
    map(each(packageNameToPackageWithPackageJson(byNameWithPackageJson))),
    switchMap(packageJsons => forkJoin(packageJsons).pipe(defaultIfEmpty([])))
  );
  const installedWithPackageJson = installed.pipe(
    map(each(localPackageToPackageName)),
    map(each(packageNameToPackageWithPackageJson<InstalledPackageWithPackageJson>(byNameWithPackageJson))),
    mergeMap(packageJsons => forkJoin(packageJsons).pipe(defaultIfEmpty([]))),
    cache()
  );
  const localWithPackageJson = local.pipe(
    map(each(localPackageToPackageName)),
    map(each(packageNameToPackageWithPackageJson<LocalPackageWithPackageJson>(byNameWithPackageJson))),
    mergeMap(packageJsons => forkJoin(packageJsons).pipe(defaultIfEmpty([])))
  );

  return {
    all,
    allWithPackageJson,
    installed,
    installedWithPackageJson,
    local,
    localWithPackageJson,
  };
}

function packageNameToPackageWithPackageJson<
  T extends InstalledPackageWithPackageJson | LocalPackageWithPackageJson =
    | InstalledPackageWithPackageJson
    | LocalPackageWithPackageJson,
>(
  byNameWithPackageJson: ObservableMap<PackageName, InstalledPackageWithPackageJson | LocalPackageWithPackageJson>
): (packageName: PackageName) => Observable<T> {
  return packageName => {
    // TODO: ObservableMap, also gets rid of the assert
    const package$ = byNameWithPackageJson.get(packageName);
    return package$ as Observable<T>;
  };
}
