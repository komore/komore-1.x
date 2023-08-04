import { type WorkspaceExecutorTaskBeginEventData } from './data/workspace-executor-task-begin-event-data';
import { type WorkspaceExecutorTaskEndEventData } from './data/workspace-executor-task-end-event-data';
import { type WorkspaceExecutorTaskErrorEventData } from './data/workspace-executor-task-error-event-data';
import { type WorkspaceExecutorTaskMessageEventData } from './data/workspace-executor-task-message-data';

/**
 * Workspace executor event data by type
 */
export interface WorkspaceExecutorEventDataByType {
  readonly 'task.begin': WorkspaceExecutorTaskBeginEventData;
  readonly 'task.end': WorkspaceExecutorTaskEndEventData;
  readonly 'task.error': WorkspaceExecutorTaskErrorEventData;
  readonly 'task.message': WorkspaceExecutorTaskMessageEventData;
}
