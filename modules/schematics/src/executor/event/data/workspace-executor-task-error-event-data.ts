import { type GenericErrorType } from '@komore/error';

import { type WorkspaceExecutorTaskEventData } from './workspace-executor-task-event-data';

/**
 * Workspace executor task error event data
 */
export interface WorkspaceExecutorTaskErrorEventData extends WorkspaceExecutorTaskEventData {
  /**
   * Error
   */
  readonly error: GenericErrorType;
}
