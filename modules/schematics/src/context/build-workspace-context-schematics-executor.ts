import { arrayToFlattenedArray } from '@komore/collection';
import { isDefined } from '@komore/functional';
import {
  cache,
  combineLatest,
  defaultIfEmpty,
  map,
  mapEach,
  mergeMap,
  ObservableMap,
  switchMap,
  type Observable,
} from '@komore/reactive';
import { assert } from '@komore/runtime';

import { isPackageWithExecutors } from '../executor/is-package-with-executors';
import { packageJsonToWorkspaceExecutorDescriptors } from '../executor/package-json-to-workspace-executor-descriptors';
import { executorReferenceStringToExecutor } from '../executor/reference/executor-reference-string-to-executor';
import { type WorkspaceExecutorDescriptor } from '../executor/workspace-executor-descriptor';
import { type PackageName } from '../package/name/package-name';
import { type PackageWithPackageJsonAndSchematics } from '../package/package-with-package-json-and-schematics';
import { type WorkspaceContextSchematics } from './workspace-context-schematics';

/**
 * Creates a function that builds a workspace context schematics executor
 *
 * @param basePath Base path
 * @returns Function that builds a workspace context schematics
 * @private
 */
export function buildWorkspaceContextSchematicsExecutor(
  basePath: string
): (
  packageWithJsonAndSchematicsByName$: ReadonlyMap<PackageName, Observable<PackageWithPackageJsonAndSchematics>>,
  packagesWithJsonAndSchematics$: Observable<ReadonlyArray<PackageWithPackageJsonAndSchematics>>
) => WorkspaceContextSchematics['executor'] {
  return (packageWithJsonAndSchematicsByName$, packagesWithJsonAndSchematics$) => {
    const packagesWithJsonAndExecutors$ = packagesWithJsonAndSchematics$.pipe(
      map(packagesWithJsonAndSchematics => packagesWithJsonAndSchematics.filter(isPackageWithExecutors)),
      cache()
    );
    const byPackage = new ObservableMap(packageNameToExecutors(basePath, packageWithJsonAndSchematicsByName$));
    const byReferenceString = new ObservableMap(executorReferenceStringToExecutor(byPackage));
    const list = packagesWithJsonAndExecutors$.pipe(
      mapEach(packageWithExecutors => {
        const packageExecutors$ = byPackage.get(packageWithExecutors.packageJson.name as PackageName);
        assert(isDefined(packageExecutors$));
        return packageExecutors$;
      }),
      mergeMap(descriptors => combineLatest(descriptors).pipe(map(arrayToFlattenedArray()), defaultIfEmpty([]))),
      cache()
    );

    return {
      byReferenceString,
      byPackage,
      list,
    };
  };
}

/**
 * Creates a function that resolves a package name to a list of workspace executor descriptors
 *
 * @param basePath Base path
 * @param packageByName Map of packages with package.json and schematics by package name
 * @returns Function that resolves a package name to a list of workspace executor descriptors
 */
function packageNameToExecutors(
  basePath: string,
  packageByName: ReadonlyMap<PackageName, Observable<PackageWithPackageJsonAndSchematics>>
): (packageName: PackageName) => Observable<ReadonlyArray<WorkspaceExecutorDescriptor>> {
  return packageName => {
    const packageWithJsonAndSchematics$ = packageByName.get(packageName);
    assert(isDefined(packageWithJsonAndSchematics$));
    return packageWithJsonAndSchematics$.pipe(switchMap(packageJsonToWorkspaceExecutorDescriptors(basePath)), cache());
  };
}
