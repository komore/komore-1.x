import { isDefined } from '@komore/functional';
import { valueToJson } from '@komore/json';
import { valueToFile } from '@komore/node/file-system';
import { readPackageJson, type PackageJson } from '@komore/node/package';
import { map, mergeMap } from '@komore/reactive';
import { assert } from '@komore/runtime';
import { toWorkspaceExecutorTaskMessageEvent, type GenericWorkspaceExecutorEvent } from '@komore/schematics';

import { type PackageNodeModuleOptions } from './package-node-module-options';

/**
 * Builds a module's package.json
 *
 * @param options Package Node module options
 */
export function packageNodeModule(options: PackageNodeModuleOptions): Observable<GenericWorkspaceExecutorEvent> {
  const { paths, taskId, workspacePackageJson } = options;
  const { output, packageJson } = paths;
  console.log('gotta read package.json', packageJson, workspacePackageJson);
  return readPackageJson(packageJson).pipe(
    map(packageJsonWithWorkspacePackageJson(workspacePackageJson)),
    map(valueToJson(undefined, 2)),
    mergeMap(valueToFile(output)),
    map(toWorkspaceExecutorTaskMessageEvent(taskId, 'meeeh done'))
  );
}

/**
 * Creates a function that merges information from a workspace package.json into a package.json
 *
 * @param workspacePackageJson Workspace package.json
 * @returns Function that merges information from a workspace package.json into a package.json
 */
function packageJsonWithWorkspacePackageJson(
  workspacePackageJson: Partial<PackageJson>
): (packageJson: Partial<PackageJson>) => Partial<PackageJson> & Pick<PackageJson, 'name'> {
  return packageJson => {
    const { name, ...projectPackageJson } = packageJson;
    // TODO: project package.json validation pass
    assert(isDefined(name), 'package.json is missing a "name" property');
    return {
      name,
      ...projectPackageJson,
      ...mergePackageJsonProperty('version', workspacePackageJson, projectPackageJson),
      ...mergePackageJsonProperty('description', workspacePackageJson, projectPackageJson),
      ...mergePackageJsonArray('keywords', workspacePackageJson, projectPackageJson),
      ...mergePackageJsonProperty('homepage', workspacePackageJson, projectPackageJson),
      ...mergePackageJsonProperty('bugs', workspacePackageJson, projectPackageJson),
      ...mergePackageJsonProperty('license', workspacePackageJson, projectPackageJson),
      ...mergePackageJsonProperty('author', workspacePackageJson, projectPackageJson),
      ...mergePackageJsonArray('contributors', workspacePackageJson, projectPackageJson),
      ...mergePackageJsonProperty('funding', workspacePackageJson, projectPackageJson),
      // TODO: add directory relative to monorepo root for repository
      ...mergePackageJsonProperty('repository', workspacePackageJson, projectPackageJson),
    };
  };
}

function mergePackageJsonProperty<K extends keyof PackageJson>(
  propertyKey: K,
  workspacePackageJson: Partial<Pick<PackageJson, K>>,
  projectPackageJson: Partial<Pick<PackageJson, K>>
): Partial<Pick<PackageJson, K>> {
  const workspaceProperty = workspacePackageJson[propertyKey];
  const projectProperty = projectPackageJson[propertyKey];

  if (workspaceProperty === undefined && projectProperty === undefined) {
    return {};
  }

  return {
    [propertyKey]: projectProperty ?? workspaceProperty,
  } as Pick<PackageJson, K>;
}

function mergePackageJsonArray<K extends keyof PackageJson>(
  propertyKey: K,
  workspacePackageJson: Partial<Pick<PackageJson, K>>,
  projectPackageJson: Partial<Pick<PackageJson, K>>
): Pick<PackageJson, K> {
  const workspaceArray = workspacePackageJson[propertyKey] as ReadonlyArray<unknown> | undefined;
  const projectArray = projectPackageJson[propertyKey] as ReadonlyArray<unknown> | undefined;
  const set = new Set([...(workspaceArray ?? []), ...(projectArray ?? [])]);
  return {
    [propertyKey]: Array.from(set),
  } as unknown as Pick<PackageJson, K>;
}
