import { objectToValues } from '@komore/functional';
import { type ProjectTaskConfiguration } from '../task/project-task-configuration';
import { projectTaskUsingExecutor } from '../task/project-task-using-executor';
import { type ProjectConfiguration } from './project-configuration';

/**
 * Creates a function that returns a list of task configuration matching an executor name
 *
 * @param executorName Executor name
 * @returns Function that returns a list of task configuration matching the executor name
 */
export function projectToTasksUsingExecutor(
  executorName: string
): (projectConfiguration: ProjectConfiguration) => ReadonlyArray<ProjectTaskConfiguration> {
  const usingExecutor = projectTaskUsingExecutor(executorName);
  return ({ tasks }) => (tasks === undefined ? [] : objectToValues(tasks).filter(usingExecutor));
}
