import { type PackageJson } from '@komore/node/package';
import { of, type Observable } from '@komore/reactive';

import { type WorkspaceGeneratorDescriptor } from './workspace-generator-descriptor';

/**
 * Creates a function that returns a list of workspace generator descriptors from a package.json
 *
 * @param basePath Base path
 * @returns Function that returns a list of workspace generator descriptors from a package.json
 */
export function packageJsonToWorkspaceGeneratorDescriptors(
  _basePath: string
): (packageJson: Partial<PackageJson>) => Observable<ReadonlyArray<WorkspaceGeneratorDescriptor>> {
  return packageJson => {
    const packageJsonWithPotentialGenerators = packageJson as PackageJsonWithPotentialGenerators;
    const generatorsDescriptorPath = packageJsonWithPotentialGenerators.komore?.generators;
    return generatorsDescriptorPath !== undefined ? of([]) : of([]);
  };
}

/**
 * package.json with an optional komore generators descriptor path
 */
interface PackageJsonWithPotentialGenerators extends Partial<PackageJson> {
  readonly komore?: {
    readonly generators?: string;
  };
}
