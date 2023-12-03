import { type ExecutorName } from './executor-name';
import { validateExecutorName } from './validate-executor-name';

/**
 * Creates an executor name from a string
 *
 * @param executorName Executor name as a string
 * @returns Executor name
 */
export function asExecutorName(executorName: string): ExecutorName {
  validateExecutorName(executorName);
  return executorName;
}
