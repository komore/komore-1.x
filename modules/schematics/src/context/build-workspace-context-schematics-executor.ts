import { arrayToFlattenedArray } from '@komore/array';
import { identity, isDefined, pipe } from '@komore/functional';
import {
  cache,
  combineLatest,
  defaultIfEmpty,
  map,
  mapEach,
  mergeMap,
  ObservableMap,
  of,
  switchMap,
  throwError,
  throwUnless,
  type Observable,
} from '@komore/reactive';
import { assert } from '@komore/runtime';
import { type ExecutorReferenceString } from '../executor/executor-reference-string';
import { executorReferenceStringToExecutorReference } from '../executor/executor-reference-string-to-executor-reference';
import { isPackageWithExecutors } from '../executor/is-package-with-executors';
import { packageJsonToWorkspaceExecutorDescriptors } from '../executor/package-json-to-workspace-executor-descriptors';
import { type WorkspaceExecutorDefaultTaskGenerator } from '../executor/workspace-executor-default-task-generator';
import { type WorkspaceExecutorDescriptor } from '../executor/workspace-executor-descriptor';
import { workspaceExecutorDescriptorByExecutorName } from '../executor/workspace-executor-descriptor-by-executor-name';
import { type WorkspaceExecutorFactory } from '../executor/workspace-executor-factory';
import { type WorkspaceExecutorOptionsProcessor } from '../executor/workspace-executor-options-processor';
import { type PackageName } from '../package/package-name';
import { packageReferenceNameToPackageReference } from '../package/package-reference-name-to-package-reference';
import { packageReferenceToExportedEntry } from '../package/package-reference-to-exported-entry';
import { type PackageWithPackageJsonAndSchematics } from '../package/package-with-package-json-and-schematics';
import { type WorkspaceContextSchematics } from './workspace-context-schematics';
import { type WorkspaceContextSchematicsExecutor } from './workspace-context-schematics-executor';

/**
 * Builds a workspace context schematics executor
 *
 * @param basePath Base path
 * @param packageWithJsonAndSchematicsByName$ Map of packages with package.json and schematics by name
 * @param packagesWithJsonAndSchematics$ List of packages with package.json and schematics
 * @returns Workspace context schematics
 */
export function buildWorkspaceContextSchematicsExecutor(
  basePath: string,
  packageWithJsonAndSchematicsByName$: ReadonlyMap<PackageName, Observable<PackageWithPackageJsonAndSchematics>>,
  packagesWithJsonAndSchematics$: Observable<ReadonlyArray<PackageWithPackageJsonAndSchematics>>
): WorkspaceContextSchematics['executor'] {
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
    return packageWithJsonAndSchematics$.pipe(switchMap(packageJsonToWorkspaceExecutorDescriptors(basePath)));
  };
}

/**
 * Creates a function that returns a workspace executor descriptor, given an executor reference string
 *
 * @param byPackage Map of package executor descriptors by package name
 * @returns Function that returns a workspace executor descriptor, given an executor reference string
 */
function executorReferenceStringToExecutor(
  byPackage: ReadonlyMap<PackageName, Observable<ReadonlyArray<WorkspaceExecutorDescriptor>>>
): (executorReferenceString: ExecutorReferenceString) => Observable<WorkspaceContextSchematicsExecutor> {
  const packageReferenceNameToFactory = pipe(
    packageReferenceNameToPackageReference,
    packageReferenceToExportedEntry<WorkspaceExecutorFactory<unknown>>()
  );
  const packageReferenceNameToDefaultTaskGenerator = pipe(
    packageReferenceNameToPackageReference,
    packageReferenceToExportedEntry<WorkspaceExecutorDefaultTaskGenerator<unknown>>()
  );
  const packageReferenceNameToOptionsProcessor = pipe(
    packageReferenceNameToPackageReference,
    packageReferenceToExportedEntry<WorkspaceExecutorOptionsProcessor<unknown>>()
  );
  return executorReferenceString => {
    const { executorName, packageName } = executorReferenceStringToExecutorReference(executorReferenceString);
    const packageWithExecutorDescriptors$ = byPackage.get(packageName);
    assert(isDefined(packageWithExecutorDescriptors$));
    return packageWithExecutorDescriptors$.pipe(
      map(executorDescriptors => executorDescriptors.find(workspaceExecutorDescriptorByExecutorName(executorName))),
      throwUnless(
        isDefined,
        () => new Error(`TODO typed: executor "${executorName}" not found in package "${packageName}"`)
      ),
      map(descriptor => {
        const factory = packageReferenceNameToFactory(descriptor.factory);
        const {
          defaultTask,
          options: { processor },
        } = descriptor;
        console.log('descr', JSON.stringify(descriptor, undefined, 2));
        const defaultTaskGenerator =
          defaultTask !== undefined
            ? packageReferenceNameToDefaultTaskGenerator(defaultTask)
            : throwError(() => new Error(`TODO typed: executor "${executorName}" cannot create a default task`));
        const optionsProcessor =
          processor !== undefined
            ? packageReferenceNameToOptionsProcessor(processor)
            : of(identity as WorkspaceExecutorOptionsProcessor<unknown>);
        return {
          defaultTaskGenerator,
          descriptor,
          factory,
          optionsProcessor,
        };
      })
    );
  };
}
