import { type WorkspaceExecutorTaskId } from './task/workspace-executor-task-id';

/**
 * Workspace executor task options
 */
export interface WorkspaceExecutorTaskOptions {
  /**
   * Task identifier
   */
  readonly taskId: WorkspaceExecutorTaskId;
}
