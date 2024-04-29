import { first, map, mergeMap, of } from '@komore/reactive';

import { type WorkspaceContext } from '../../context/workspace-context';
import { workspaceContextSchematicsExecutorToDefaultTaskGenerator } from '../../context/workspace-context-schematics-executor-to-default-task-generator';
import { executorReferenceStringToExecutor } from '../../executor/reference/executor-reference-string-to-executor';
import { type ProjectConfiguration } from '../../project/project-configuration';
import { type TaskName } from '../name/task-name';
import { type TaskConfiguration } from '../task-configuration';
import { type ProjectTaskConfigurationsJson } from '../../project/json/project-task-configurations-json';
import { taskNameToProjectTaskConfiguration } from './task-name-to-project-task-configuration';

/**
 * Creates a function that resolves a task configuration, given a task name
 *
 * @param workspaceContext Workspace context
 * @returns Function that resolves a task configuration, given a task name
 */
export function taskNameToResolvedTaskConfiguration(
  workspaceContext: WorkspaceContext
): (
  taskName: TaskName,
  projectConfiguration: Omit<ProjectConfiguration, 'tasks'>,
  projectTasks: ProjectTaskConfigurationsJson
) => Observable<TaskConfiguration | undefined> {
  const defaultTasks = workspaceContext.configuration.defaults.tasks;
  const { byPackage } = workspaceContext.schematics.executor;
  const toExecutor = executorReferenceStringToExecutor(byPackage);
  const toProjectTaskConfiguration = taskNameToProjectTaskConfiguration(defaultTasks);
  return (taskName, projectConfiguration, projectTasks) => {
    const executorReferenceStringOrTaskConfiguration = toProjectTaskConfiguration(projectTasks)(taskName);
    const [executor, taskConfiguration] =
      typeof executorReferenceStringOrTaskConfiguration === 'object'
        ? [executorReferenceStringOrTaskConfiguration.executor, executorReferenceStringOrTaskConfiguration]
        : [executorReferenceStringOrTaskConfiguration, undefined];

    if (executor === undefined) {
      return of(undefined);
    }

    return toExecutor(executor).pipe(
      first(),
      mergeMap(workspaceContextSchematicsExecutorToDefaultTaskGenerator(workspaceContext)),
      // TODO: avoid cast as tasks is missing
      mergeMap(generator => generator(projectConfiguration as ProjectConfiguration)),
      map(defaultTaskConfiguration => ({
        ...defaultTaskConfiguration,
        ...(taskConfiguration !== undefined ? taskConfiguration : {}),
        executor,
      }))
    );
  };
}
