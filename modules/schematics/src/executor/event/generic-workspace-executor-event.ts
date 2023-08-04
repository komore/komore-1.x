import { type WorkspaceExecutorEvent } from './workspace-executor-event';
import { type WorkspaceExecutorEventDataByType } from './workspace-executor-event-data-by-type';

/**
 * Generic workspace executor event
 */
export type GenericWorkspaceExecutorEvent = WorkspaceExecutorEvent<keyof WorkspaceExecutorEventDataByType>;
