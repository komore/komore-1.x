import { isDefined } from '@komore/functional';
import { map, switchMap, throwUnless } from '@komore/reactive';
import { assert } from '@komore/runtime';

import { type LocalPackageWithPackageJson } from '../package/local-package-with-package-json';
import { type GeneratorReference } from './generator-reference';
import { packageJsonToWorkspaceGeneratorDescriptors } from './package-json-to-workspace-generator-descriptors';
import { type WorkspaceGeneratorDescriptor } from './workspace-generator-descriptor';
import { workspaceGeneratorDescriptorByGeneratorName } from './workspace-generator-descriptor-by-generator-name';

/**
 * Creates a function that returns a generator descriptor, given a generator reference
 *
 * @param basePath Base path
 * @param packageJsonByName Package JSON by name map
 * @returns Function that returns a generator descriptor, given a generator reference
 */
export function generatorReferenceToGeneratorDescriptor(
  basePath: string,
  packageJsonByName: ReadonlyMap<string, Observable<LocalPackageWithPackageJson>>
): (generatorReference: GeneratorReference) => Observable<WorkspaceGeneratorDescriptor> {
  return ({ generatorName, packageName }) => {
    const packageJson$ = packageJsonByName.get(packageName);
    assert(isDefined(packageJson$), `package ${packageName} lazy-loading failed`);
    return packageJson$.pipe(
      // TODO: cache workspace generator descriptors
      switchMap(packageJsonToWorkspaceGeneratorDescriptors(basePath)),
      map(descriptors => descriptors.find(workspaceGeneratorDescriptorByGeneratorName(generatorName))),
      throwUnless(
        isDefined,
        () => new Error(`TOdO: can't find an generator "${generatorName}" in package "${packageName}" bro`)
      )
    );
  };
}
