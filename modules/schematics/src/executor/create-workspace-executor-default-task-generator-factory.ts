import { type WorkspaceExecutorDefaultTaskGeneratorFactory } from './workspace-executor-default-task-generator-factory';

/**
 * Creates a workspace executor default task generator factory
 *
 * @param factory Default task generator factory
 * @returns Default task generator factory
 */
export function createWorkspaceExecutorDefaultTaskGeneratorFactory<OptionsType = unknown>(
  factory: WorkspaceExecutorDefaultTaskGeneratorFactory<OptionsType>
): WorkspaceExecutorDefaultTaskGeneratorFactory<OptionsType> {
  return factory;
}
