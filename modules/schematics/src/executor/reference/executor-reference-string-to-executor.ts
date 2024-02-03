import { identity, isDefined, pipe } from '@komore/functional';
import { map, of, ObservableMap, throwError, throwUnless } from '@komore/reactive';

import { type WorkspaceContextSchematicsExecutor } from '../../context/workspace-context-schematics-executor';
import { type PackageName } from '../../package/name/package-name';
import { schematicsError } from '../../schematics.error';
import { packageReferenceNameToPackageReference } from '../../package/reference/package-reference-name-to-package-reference';
import { packageReferenceToExportedEntry } from '../../package/reference/package-reference-to-exported-entry';
import { type WorkspaceExecutorFactory } from '../factory/workspace-executor-factory';
import { type WorkspaceExecutorDescriptor } from '../workspace-executor-descriptor';
import { type WorkspaceExecutorDefaultTaskGeneratorFactory } from '../workspace-executor-default-task-generator-factory';
import { type WorkspaceExecutorOptionsProcessor } from '../workspace-executor-options-processor';
import { workspaceExecutorDescriptorByExecutorName } from '../workspace-executor-descriptor-by-executor-name';
import { type ExecutorReferenceString } from './executor-reference-string';
import { executorReferenceStringToExecutorReference } from './executor-reference-string-to-executor-reference';

/**
 * Creates a function that returns a workspace executor descriptor, given an executor reference string
 *
 * @param byPackage Map of package executor descriptors by package name
 * @returns Function that returns a workspace executor descriptor, given an executor reference string
 */
export function executorReferenceStringToExecutor(
  byPackage: ObservableMap<PackageName, ReadonlyArray<WorkspaceExecutorDescriptor>>
): (executorReferenceString: ExecutorReferenceString) => Observable<WorkspaceContextSchematicsExecutor> {
  const packageReferenceNameToFactory = pipe(
    packageReferenceNameToPackageReference,
    packageReferenceToExportedEntry<WorkspaceExecutorFactory<unknown>>()
  );
  const packageReferenceNameToDefaultTaskGeneratorFactory = pipe(
    packageReferenceNameToPackageReference,
    packageReferenceToExportedEntry<WorkspaceExecutorDefaultTaskGeneratorFactory<unknown>>()
  );
  const packageReferenceNameToOptionsProcessor = pipe(
    packageReferenceNameToPackageReference,
    packageReferenceToExportedEntry<WorkspaceExecutorOptionsProcessor<unknown>>()
  );
  return executorReferenceString => {
    const { executorName, packageName } = executorReferenceStringToExecutorReference(executorReferenceString);
    const packageWithExecutorDescriptors$ = byPackage.get(packageName);
    return packageWithExecutorDescriptors$.pipe(
      map(executorDescriptors => executorDescriptors.find(workspaceExecutorDescriptorByExecutorName(executorName))),
      throwUnless(isDefined, () => schematicsError.executorNotFound({ executorName, packageName })),
      map(descriptor => {
        const factory = packageReferenceNameToFactory(descriptor.factory);
        const {
          defaultTask,
          options: { processor },
        } = descriptor;
        const defaultTaskGenerator =
          defaultTask !== undefined
            ? packageReferenceNameToDefaultTaskGeneratorFactory(defaultTask)
            : throwError(() => schematicsError.executorDefaultTaskGeneratorNotFound({ executorName }));
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
