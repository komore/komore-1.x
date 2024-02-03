import { first, map, mergeMap } from '@komore/reactive';

import { type WorkspaceContext } from '../../context/workspace-context';
import { workspaceContextSchematicsExecutorToDefaultTaskGenerator } from '../../context/workspace-context-schematics-executor-to-default-task-generator';
import { type ExecutorReferenceString } from '../../executor/reference/executor-reference-string';
import { executorReferenceStringToExecutor } from '../../executor/reference/executor-reference-string-to-executor';
import { type ProjectConfiguration } from '../../project/project-configuration';
import { type TaskConfiguration } from '../task-configuration';

/**
 * Creates a function that resolves a task configuration, given an executor reference string
 *
 * @param workspaceContext Workspace context
 * @returns Function that resolves a task configuration, given an executor reference string
 */
export function executorReferenceStringToResolvedTaskConfiguration(
  workspaceContext: WorkspaceContext
): (
  executorReferenceString: ExecutorReferenceString,
  projectConfiguration: ProjectConfiguration
) => Observable<TaskConfiguration> {
  const toDefaultTaskGenerator = workspaceContextSchematicsExecutorToDefaultTaskGenerator(workspaceContext);
  const toExecutor = executorReferenceStringToExecutor(workspaceContext.schematics.executor.byPackage);

  return (executor, projectConfiguration) =>
    toExecutor(executor).pipe(
      first(),
      mergeMap(toDefaultTaskGenerator),
      mergeMap(generator => generator(projectConfiguration)),
      map(projectConfiguration => ({
        ...projectConfiguration,
        executor,
      }))
    );
}
