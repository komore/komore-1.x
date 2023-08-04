import { type WorkspaceExecutorEventDataByType } from './workspace-executor-event-data-by-type';
import { type WorkspaceExecutorEventId } from './workspace-executor-event-id';

/**
 * Workspace executor event
 */
export interface WorkspaceExecutorEvent<Type extends keyof WorkspaceExecutorEventDataByType> {
  /**
   * Event data
   */
  readonly data: WorkspaceExecutorEventDataByType[Type];
  /**
   * Event identifier
   */
  readonly id: WorkspaceExecutorEventId;
  /**
   * Event type
   */
  readonly type: Type;
}
