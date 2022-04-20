import { objectToValues } from '@komore/functional';
import { type ProjectConfiguration } from '@nrwl/devkit';
import { projectTaskUsingExecutor } from '../task/project-task-using-executor';

/**
 * Creates a function that tests whether a project has at least one target using a specific executor
 * @param executorName Executor name
 * @returns Function that tests whether a project has at least one target using the executor
 */
export function projectWithTargetUsingExecutor(
  executorName: string
): (projectConfiguration: ProjectConfiguration) => boolean {
  return ({ targets }) => objectToValues(targets ?? {}).some(projectTaskUsingExecutor(executorName));
}
