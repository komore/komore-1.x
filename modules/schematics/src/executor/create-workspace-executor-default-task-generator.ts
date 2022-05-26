import { type WorkspaceExecutorDefaultTaskGenerator } from './workspace-executor-default-task-generator';

/**
 * Creates a workspace executor default task generator
 *
 * @param defaultTaskGenerator Default task generator
 * @returns Default task generator
 */
export function createWorkspaceExecutorDefaultTaskGenerator<OptionsType = unknown>(
  defaultTaskGenerator: WorkspaceExecutorDefaultTaskGenerator<OptionsType>
): WorkspaceExecutorDefaultTaskGenerator<OptionsType> {
  return defaultTaskGenerator;
}
