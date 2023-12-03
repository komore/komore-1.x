import { isDefined } from '@komore/functional';
import { map, switchMap, throwUnless, type Observable } from '@komore/reactive';
import { assert } from '@komore/runtime';

import { type LocalPackageWithPackageJson } from '../../package/local-package-with-package-json';
import { schematicsError } from '../../schematics.error';
import { packageJsonToWorkspaceExecutorDescriptors } from '../package-json-to-workspace-executor-descriptors';
import { type WorkspaceExecutorDescriptor } from '../workspace-executor-descriptor';
import { workspaceExecutorDescriptorByExecutorName } from '../workspace-executor-descriptor-by-executor-name';
import { type ExecutorReference } from './executor-reference';

/**
 * Creates a function that returns an executor descriptor, given an executor reference
 *
 * @param basePath Base path
 * @param packageJsonByName Package JSON by name map
 * @returns Function that returns an executor descriptor, given an executor reference
 */
export function executorReferenceToExecutorDescriptor(
  basePath: string,
  packageJsonByName: ReadonlyMap<string, Observable<LocalPackageWithPackageJson>>
): (executorReference: ExecutorReference) => Observable<WorkspaceExecutorDescriptor> {
  return ({ executorName, packageName }) => {
    const packageJson$ = packageJsonByName.get(packageName);
    assert(isDefined(packageJson$), `package ${packageName} lazy-loading failed`);
    return packageJson$.pipe(
      // TODO: cache workspace executor descriptors
      switchMap(packageJsonToWorkspaceExecutorDescriptors(basePath)),
      map(descriptors => descriptors.find(workspaceExecutorDescriptorByExecutorName(executorName))),
      throwUnless(isDefined, () => schematicsError.executorNotFound({ executorName, packageName }))
    );
  };
}
