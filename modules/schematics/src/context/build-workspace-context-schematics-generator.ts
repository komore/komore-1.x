import { arrayToFlattenedArray } from '@komore/array';
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
  throwUnless,
  type Observable,
} from '@komore/reactive';
import { assert } from '@komore/runtime';
import { type GeneratorReferenceString } from '../generator/generator-reference-string';
import { generatorReferenceStringToGeneratorReference } from '../generator/generator-reference-string-to-generator-reference';
import { isPackageWithGenerators } from '../generator/is-package-with-generators';
import { packageJsonToWorkspaceGeneratorDescriptors } from '../generator/package-json-to-workspace-generator-descriptors';
import { type WorkspaceGeneratorDescriptor } from '../generator/workspace-generator-descriptor';
import { workspaceGeneratorDescriptorByGeneratorName } from '../generator/workspace-generator-descriptor-by-generator-name';
import { type PackageName } from '../package/package-name';
import { type PackageWithPackageJsonAndSchematics } from '../package/package-with-package-json-and-schematics';
import { type WorkspaceContextSchematics } from './workspace-context-schematics';

/**
 * Builds a workspace context schematics generator
 *
 * @param basePath Base path
 * @param packageWithJsonAndSchematicsByName$ Map of packages with package.json and schematics by name
 * @param packagesWithJsonAndSchematics$ List of packages with package.json and schematics
 * @returns Workspace context schematics
 */
export function buildWorkspaceContextSchematicsGenerator(
  basePath: string,
  packageWithJsonAndSchematicsByName$: ReadonlyMap<PackageName, Observable<PackageWithPackageJsonAndSchematics>>,
  packagesWithJsonAndSchematics$: Observable<ReadonlyArray<PackageWithPackageJsonAndSchematics>>
): WorkspaceContextSchematics['generator'] {
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
    return packageWithJsonAndSchematics$.pipe(switchMap(packageJsonToWorkspaceGeneratorDescriptors(basePath)));
  };
}

/**
 * Creates a function that returns a workspace generator descriptor, given a generator reference string
 *
 * @param byPackage Map of package generator descriptors by package name
 * @returns Function that returns a workspace generator descriptor, given a generator reference string
 */
function generatorReferenceStringToGenerator(
  byPackage: ReadonlyMap<PackageName, Observable<ReadonlyArray<WorkspaceGeneratorDescriptor>>>
): (generatorReferenceString: GeneratorReferenceString) => Observable<WorkspaceGeneratorDescriptor> {
  return generatorReferenceString => {
    const { generatorName, packageName } = generatorReferenceStringToGeneratorReference(generatorReferenceString);
    const packageWithGeneratorDescriptors$ = byPackage.get(packageName);
    assert(isDefined(packageWithGeneratorDescriptors$));
    return packageWithGeneratorDescriptors$.pipe(
      map(generators => generators.find(workspaceGeneratorDescriptorByGeneratorName(generatorName))),
      throwUnless(
        isDefined,
        () => new Error(`TODO typed: generator "${generatorName}" not found in package "${packageName}"`)
      )
    );
  };
}
