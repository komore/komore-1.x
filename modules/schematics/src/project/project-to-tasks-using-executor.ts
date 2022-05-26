import { objectToValues } from '@komore/functional';
import { type ExecutorReferenceString } from '../executor/executor-reference-string';
import { type TaskConfiguration } from '../task/task-configuration';
import { taskUsingExecutor } from '../task/task-using-executor';
import { type ProjectConfiguration } from './project-configuration';

/**
 * Creates a function that returns a list of task configuration matching an executor name
 *
 * @param executorName Executor name
 * @returns Function that returns a list of task configuration matching the executor name
 */
export function projectToTasksUsingExecutor(
  executorName: ExecutorReferenceString
): (projectConfiguration: ProjectConfiguration) => ReadonlyArray<TaskConfiguration> {
  return ({ tasks }) => (tasks === undefined ? [] : objectToValues(tasks).filter(taskUsingExecutor(executorName)));
}
