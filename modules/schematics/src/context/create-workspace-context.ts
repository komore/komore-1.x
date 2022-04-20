import { arrayToFlattenedArray } from '@komore/array';
import { cache, defaultIfEmpty, defer, forkJoin, map, mapEach, mergeMap, of, type Observable } from '@komore/reactive';
import { join } from 'path';
import { packageJsonToWorkspaceExecutorDescriptors } from '../executor/package-json-to-workspace-executor-descriptors';
import { type WorkspaceGeneratorDescriptor } from '../generator/workspace-generator-descriptor';
import { createPackageManager } from '../package/create-package-manager';
import { detectPackageManagerType } from '../package/detect-package-manager-type';
import { packageToPackageWithJson } from '../package/package-to-package-with-json';
import { tsConfigToLocalPackages } from '../package/tsconfig-to-local-packages';
import { readTsConfig } from '../typescript/read-tsconfig';
import { loadWorkspaceConfiguration } from '../workspace/load-workspace-configuration';
import { type WorkspaceContext } from './workspace-context';

/**
 * Creates a workspace context
 *
 * @param basePath Base path
 * @returns Workspace context
 */
export function createWorkspaceContext(basePath: string): Observable<WorkspaceContext> {
  return defer(() => {
    const workspacePath = join(basePath, 'k.json');
    const configuration = loadWorkspaceConfiguration(workspacePath).pipe(cache());
    const manager = detectPackageManagerType(basePath).pipe(
      mergeMap(packageManagerType => createPackageManager(basePath, packageManagerType)),
      cache()
    );
    const installed = manager.pipe(
      mergeMap(packageManager => packageManager.listPackages()),
      cache()
    );
    const installedPackageJsons = installed.pipe(
      mapEach(packageToPackageWithJson),
      mergeMap(packageJsons => forkJoin(packageJsons).pipe(defaultIfEmpty([]))),
      cache()
    );
    const tsConfigBasePath = join(basePath, 'tsconfig.base.json');
    const tsConfigBase = readTsConfig(tsConfigBasePath).pipe(cache());
    const local = tsConfigBase.pipe(mergeMap(tsConfigToLocalPackages(basePath)), cache());
    const localPackageJsons = local.pipe(
      mapEach(packageToPackageWithJson),
      mergeMap(packageJsons => forkJoin(packageJsons).pipe(defaultIfEmpty([])))
    );
    const allPackageJsons = forkJoin([installedPackageJsons, localPackageJsons]).pipe(
      map(arrayToFlattenedArray()),
      cache()
    );
    const executors = allPackageJsons.pipe(
      mapEach(packageJsonToWorkspaceExecutorDescriptors(basePath)),
      mergeMap(descriptors => forkJoin(descriptors).pipe(map(arrayToFlattenedArray()), defaultIfEmpty([])))
    );
    const generators = of([] as ReadonlyArray<WorkspaceGeneratorDescriptor>);

    return of({
      basePath,
      configuration,
      package: {
        installed,
        installedPackageJsons,
        local,
        localPackageJsons,
        manager,
      },
      schematics: {
        executors,
        generators,
      },
      ts: {
        tsConfigBase,
      },
    });
  });
}
