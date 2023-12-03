import { first, map, mergeMap, type Observable } from '@komore/reactive';

import { type WorkspaceContext } from '../../context/workspace-context';
import { workspaceContextSchematicsExecutorToDefaultTaskGenerator } from '../../context/workspace-context-schematics-executor-to-default-task-generator';
import { executorReferenceStringToExecutor } from '../../executor/reference/executor-reference-string-to-executor';
import { type ProjectConfiguration } from '../../project/project-configuration';
import { schematicsError } from '../../schematics.error';
import { type TaskName } from '../name/task-name';
import { type TaskConfiguration } from '../task-configuration';
import { taskNameToDefaultExecutorReferenceString } from './task-name-to-default-executor-reference-string';

/**
 * Creates a function that resolves a task configuration, given a task name
 *
 * @param workspaceContext Workspace context
 * @returns Function that resolves a task configuration, given a task name
 */
export function taskNameToResolvedTaskConfiguration(
  workspaceContext: WorkspaceContext
): (taskName: TaskName, projectConfiguration: ProjectConfiguration) => Observable<TaskConfiguration> {
  const defaultTasks = workspaceContext.configuration.defaults.tasks;
  const { byPackage } = workspaceContext.schematics.executor;
  const toDefaultExecutorReferenceString = taskNameToDefaultExecutorReferenceString(defaultTasks);
  const toExecutor = executorReferenceStringToExecutor(byPackage);
  return (taskName, projectConfiguration) => {
    const executor = toDefaultExecutorReferenceString(taskName);
    if (executor === undefined) {
      throw schematicsError.defaultTaskNameNotFound({ taskName });
    }

    return toExecutor(executor).pipe(
      first(),
      mergeMap(workspaceContextSchematicsExecutorToDefaultTaskGenerator(workspaceContext)),
      mergeMap(generator => generator(projectConfiguration)),
      map(projectConfiguration => ({
        ...projectConfiguration,
        executor,
      }))
    );
  };
}
