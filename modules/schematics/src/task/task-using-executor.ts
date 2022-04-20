import { type ProjectTaskConfiguration } from './project-task-configuration';

/**
 * Creates a function that tests whether a task uses an executor
 *
 * @param executorName Executor name
 * @returns Function that tests whether a task uses the executor
 */
export function projectTaskUsingExecutor(executorName: string): (task: ProjectTaskConfiguration) => boolean {
  return task => task.executor === executorName;
}
