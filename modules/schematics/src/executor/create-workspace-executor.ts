import { type WorkspaceExecutor } from './workspace-executor';

/**
 * Creates a workspace executor
 *
 * @param executor Executor function
 * @returns Workspace executor
 * @template OptionsType Options type
 */
export function createWorkspaceExecutor<OptionsType = unknown>(
  executor: WorkspaceExecutor<OptionsType>
): WorkspaceExecutor<OptionsType> {
  return executor;
}
