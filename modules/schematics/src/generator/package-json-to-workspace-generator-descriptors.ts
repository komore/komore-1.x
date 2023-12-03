import { join } from 'path';

import { each } from '@komore/collection';
import { type PackageJson } from '@komore/node/package';
import { map, of, type Observable } from '@komore/reactive';

import { type LocalPackageWithPackageJson } from '../package/local-package-with-package-json';
import { type PackageName } from '../package/name/package-name';
import { readWorkspaceGeneratorDescriptors } from './read-workspace-generator-descriptors';
import { type WorkspaceGeneratorDescriptor } from './workspace-generator-descriptor';

/**
 * Creates a function that returns a list of workspace generator descriptors from a package.json
 *
 * @param basePath Base path
 * @returns Function that returns a list of workspace generator descriptors from a package.json
 */
export function packageJsonToWorkspaceGeneratorDescriptors(
  basePath: string
): (
  localPackageWithPackageJson: LocalPackageWithPackageJson
) => Observable<ReadonlyArray<WorkspaceGeneratorDescriptor>> {
  return ({ path, packageJson }) => {
    const packageJsonWithPotentialGenerators = packageJson as PackageJsonWithPotentialGenerators;
    const descriptorsRelativePath = packageJsonWithPotentialGenerators.komore?.generators;
    if (descriptorsRelativePath === undefined) {
      return of([]);
    }

    const descriptorsPath = join(basePath, path, descriptorsRelativePath);
    const { name } = packageJsonWithPotentialGenerators;

    return readWorkspaceGeneratorDescriptors(descriptorsPath).pipe(
      map(each(workspaceGeneratorDescriptorWithPackage(name, path)))
    );
  };
}

function workspaceGeneratorDescriptorWithPackage(
  name: PackageName,
  path: string
): (descriptor: Omit<WorkspaceGeneratorDescriptor, 'package'>) => WorkspaceGeneratorDescriptor {
  return descriptor => ({
    ...descriptor,
    package: {
      name,
      path,
    },
  });
}

/**
 * package.json with an optional komore generators descriptor path
 */
interface PackageJsonWithPotentialGenerators extends Partial<PackageJson> {
  readonly komore?: {
    readonly generators?: string;
  };
  readonly name: PackageName;
}
