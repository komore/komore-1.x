import { type ExecutorReferenceString } from '../executor/reference/executor-reference-string';
import { type TaskConfiguration } from './task-configuration';

/**
 * Creates a function that tests whether a task uses an executor
 *
 * @param executorName Executor name
 * @returns Function that tests whether a task uses the executor
 */
export function taskByExecutor(executorName: ExecutorReferenceString): (task: TaskConfiguration) => boolean {
  return task => task.executor === executorName;
}
