import { mapEach, of, type Observable } from '@komore/reactive';
import { type PackageJson } from '@komore/runtime/node';
import { join } from 'path';
import { type LocalPackageWithPackageJson } from '../package/local-package-with-package-json';
import { type PackageName } from '../package/package-name';
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
    const packageJsonWithPotentialExecutors = packageJson as PackageJsonWithPotentialExecutors & {
      readonly name: string;
    };
    const descriptorsRelativePath = packageJsonWithPotentialExecutors.komore?.executors;
    if (descriptorsRelativePath === undefined) {
      return of([]);
    }

    const descriptorsPath = join(basePath, path, descriptorsRelativePath);

    return readWorkspaceExecutorDescriptors(descriptorsPath).pipe(
      mapEach(descriptor => ({
        ...descriptor,
        package: {
          name: packageJsonWithPotentialExecutors.name as PackageName,
          path,
        },
      }))
    );
  };
}

/**
 * package.json with an optional komore executors descriptor path
 */
interface PackageJsonWithPotentialExecutors extends Partial<PackageJson> {
  readonly komore?: {
    readonly executors?: string;
  };
}
