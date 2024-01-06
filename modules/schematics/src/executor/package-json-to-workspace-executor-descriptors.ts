import { join } from 'node:path';

import { each } from '@komore/collection';
import { type PackageJson } from '@komore/node/package';
import { map, of, type Observable } from '@komore/reactive';

import { type LocalPackageWithPackageJson } from '../package/local-package-with-package-json';
import { type PackageName } from '../package/name/package-name';
import { readWorkspaceExecutorDescriptors } from './read-workspace-executor-descriptors';
import { type WorkspaceExecutorDescriptor } from './workspace-executor-descriptor';

/**
 * Creates a function that returns a list of workspace executor descriptors from a package.json
 *
 * @param basePath Base path
 * @returns Function that returns a list of workspace executor descriptors from a package.json
 */
export function packageJsonToWorkspaceExecutorDescriptors(
  basePath: string
): (packageJson: LocalPackageWithPackageJson) => Observable<ReadonlyArray<WorkspaceExecutorDescriptor>> {
  return ({ path, packageJson }) => {
    const packageJsonWithPotentialExecutors = packageJson as PackageJsonWithPotentialExecutors;
    const descriptorsRelativePath = packageJsonWithPotentialExecutors.komore?.executors;
    if (descriptorsRelativePath === undefined) {
      return of([]);
    }

    const descriptorsPath = join(basePath, path, descriptorsRelativePath);
    const { name } = packageJsonWithPotentialExecutors;

    return readWorkspaceExecutorDescriptors(descriptorsPath).pipe(
      map(each(workspaceExecutorDescriptorWithPackage(name, path)))
    );
  };
}

function workspaceExecutorDescriptorWithPackage(
  name: PackageName,
  path: string
): (descriptor: Omit<WorkspaceExecutorDescriptor, 'package'>) => WorkspaceExecutorDescriptor {
  return descriptor => ({
    ...descriptor,
    package: {
      name,
      path,
    },
  });
}

/**
 * package.json with an optional komore executors descriptor path
 */
interface PackageJsonWithPotentialExecutors extends Partial<PackageJson> {
  readonly komore?: {
    readonly executors?: string;
  };
  readonly name: PackageName;
}
