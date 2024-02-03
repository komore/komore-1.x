import { arrayToArrayFiltered, arrayToFlattenedArray } from '@komore/collection';
import {
  cache,
  combineLatest,
  defaultIfEmpty,
  map,
  mapEach,
  mergeMap,
  ObservableMap,
  switchMap,
} from '@komore/reactive';

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
  packageWithJsonAndSchematicsByName$: ObservableMap<PackageName, PackageWithPackageJsonAndSchematics>,
  packagesWithJsonAndSchematics$: Observable<ReadonlyArray<PackageWithPackageJsonAndSchematics>>
) => WorkspaceContextSchematics['generator'] {
  return (packageWithJsonAndSchematicsByName$, packagesWithJsonAndSchematics$) => {
    const packagesWithJsonAndGenerators$ = packagesWithJsonAndSchematics$.pipe(
      map(arrayToArrayFiltered(isPackageWithGenerators)),
      cache()
    );
    const byPackage = new ObservableMap(packageNameToGenerators(basePath, packageWithJsonAndSchematicsByName$));
    const byReferenceString = new ObservableMap(generatorReferenceStringToGenerator(byPackage));
    const list = packagesWithJsonAndGenerators$.pipe(
      mapEach(packageWithGenerators => packageWithGenerators.packageJson.name as PackageName),
      mapEach(packageName => byPackage.get(packageName)),
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
  packageByName: ObservableMap<PackageName, PackageWithPackageJsonAndSchematics>
): (packageName: PackageName) => Observable<ReadonlyArray<WorkspaceGeneratorDescriptor>> {
  const toWorkspaceGeneratorDescriptors = packageJsonToWorkspaceGeneratorDescriptors(basePath);
  return packageName => packageByName.get(packageName).pipe(switchMap(toWorkspaceGeneratorDescriptors), cache());
}
