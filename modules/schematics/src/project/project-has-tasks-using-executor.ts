import { objectToValues } from '@komore/functional';

import { type ExecutorReferenceString } from '../executor/reference/executor-reference-string';
import { taskUsingExecutor } from '../task/task-using-executor';
import { type ProjectConfiguration } from './project-configuration';

/**
 * Creates a function that tests whether a project has at least one task using a specific executor
 *
 * @param executorName Executor name
 * @returns Function that tests whether a project has at least one task using the executor
 */
export function projectHasTasksUsingExecutor(
  executorName: ExecutorReferenceString
): (projectConfiguration: ProjectConfiguration) => boolean {
  const usingExecutor = taskUsingExecutor(executorName);
  return ({ tasks }) => objectToValues(tasks).some(usingExecutor);
}
