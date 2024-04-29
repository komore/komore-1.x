import { type WorkspaceContext } from '../../context/workspace-context';

/**
 * Workspace executor factory options
 */
export interface WorkspaceExecutorFactoryOptions {
  /**
   * Workspace context
   */
  readonly workspaceContext: WorkspaceContext;
}
