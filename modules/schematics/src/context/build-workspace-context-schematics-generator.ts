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

import { isPackageWithGenerators } from '../generator/is-package-with-generators';
import { packageJsonToWorkspaceGeneratorDescriptors } from '../generator/package-json-to-workspace-generator-descriptors';
import { generatorReferenceStringToGenerator } from '../generator/reference/generator-reference-string-to-generator';
import { type WorkspaceGeneratorDescriptor } from '../generator/workspace-generator-descriptor';
import { type PackageName } from '../package/name/package-name';
import { type PackageWithPackageJsonAndSchematics } from '../package/package-with-package-json-and-schematics';
import { type WorkspaceContextSchematics } from './workspace-context-schematics';

/**
 * Returns a function that builds a workspace context schematics generator
 *
 * @param basePath Base path
 * @returns Workspace context schematics
 */
export function buildWorkspaceContextSchematicsGenerator(
  basePath: string
): (
  packageWithJsonAndSchematicsByName$: ReadonlyMap<PackageName, Observable<PackageWithPackageJsonAndSchematics>>,
  packagesWithJsonAndSchematics$: Observable<ReadonlyArray<PackageWithPackageJsonAndSchematics>>
) => WorkspaceContextSchematics['generator'] {
  return (packageWithJsonAndSchematicsByName$, packagesWithJsonAndSchematics$) => {
    const packagesWithJsonAndGenerators$ = packagesWithJsonAndSchematics$.pipe(
      map(packagesWithJsonAndSchematics => packagesWithJsonAndSchematics.filter(isPackageWithGenerators)),
      cache()
    );
    const byPackage = new ObservableMap(packageNameToGenerators(basePath, packageWithJsonAndSchematicsByName$));
    const byReferenceString = new ObservableMap(generatorReferenceStringToGenerator(byPackage));
    const list = packagesWithJsonAndGenerators$.pipe(
      mapEach(packageWithGenerators => {
        const packageGenerators$ = byPackage.get(packageWithGenerators.packageJson.name as PackageName);
        assert(isDefined(packageGenerators$));
        return packageGenerators$;
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
 * Creates a function that resolves a package name to a list of workspace generator descriptors
 *
 * @param basePath Base path
 * @param packageByName Map of packages with package.json and schematics by package name
 * @returns Function that resolves a package name to a list of workspace generator descriptors
 */
function packageNameToGenerators(
  basePath: string,
  packageByName: ReadonlyMap<PackageName, Observable<PackageWithPackageJsonAndSchematics>>
): (packageName: PackageName) => Observable<ReadonlyArray<WorkspaceGeneratorDescriptor>> {
  return packageName => {
    const packageWithJsonAndSchematics$ = packageByName.get(packageName);
    assert(isDefined(packageWithJsonAndSchematics$));
    return packageWithJsonAndSchematics$.pipe(switchMap(packageJsonToWorkspaceGeneratorDescriptors(basePath)), cache());
  };
}
