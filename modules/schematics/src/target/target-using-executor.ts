import { type TargetConfiguration } from '@nrwl/devkit';

/**
 * Creates a function that tests whether a target uses an executor
 * @param executorName Executor name
 * @returns Function that tests whether a target uses the executor
 */
export function targetUsingExecutor(executorName: string): (target: TargetConfiguration) => boolean {
  return target => target.executor === executorName;
}
