import { type ExecutorName } from './executor-name';
import { type WorkspaceExecutorDescriptor } from './workspace-executor-descriptor';

/**
 * Returns a function that tests whether an executor descriptor matches an executor name
 *
 * @param executorName Executor name
 * @returns Function that tests whether an executor descriptor matches the executor name
 */
export function workspaceExecutorDescriptorByExecutorName(
  executorName: ExecutorName
): (executorDescriptor: WorkspaceExecutorDescriptor) => boolean {
  return ({ name }) => name === executorName;
}
