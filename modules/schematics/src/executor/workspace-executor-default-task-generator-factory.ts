import { type WorkspaceContext } from '../context/workspace-context';
import { type WorkspaceExecutorDefaultTaskGenerator } from './workspace-executor-default-task-generator';

/**
 * Workspace executor default task generator factory
 *
 * @template OptionsType Options type
 */
export interface WorkspaceExecutorDefaultTaskGeneratorFactory<OptionsType = unknown> {
  /**
   * Creates a default task configuration generator
   *
   * @param workspaceContext Workspace context
   * @returns Default task configuration generator
   */
  (workspaceContext: WorkspaceContext): WorkspaceExecutorDefaultTaskGenerator<OptionsType>;
}
