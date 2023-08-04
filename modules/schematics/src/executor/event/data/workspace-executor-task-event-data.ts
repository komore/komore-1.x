import { type Temporal } from '@komore/temporal';

import { type WorkspaceExecutorTaskId } from '../../task/workspace-executor-task-id';

/**
 * Workspace executor task event data
 */
export interface WorkspaceExecutorTaskEventData {
  /**
   * Remaining duration
   */
  readonly remainingDuration?: Temporal.Duration;
  /**
   * Task identifier
   */
  readonly taskId: WorkspaceExecutorTaskId;
}
