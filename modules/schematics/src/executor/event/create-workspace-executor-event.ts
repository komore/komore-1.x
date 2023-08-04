import { generateWorkspaceExecutorEventId } from './generate-workspace-executor-event-id';
import { WorkspaceExecutorEvent } from './workspace-executor-event';
import { WorkspaceExecutorEventDataByType } from './workspace-executor-event-data-by-type';

/**
 * Creates a workspace executor event
 *
 * @param type Event type
 * @param data Event data
 * @returns Workspace executor event
 * @template Type Workspace executor event type
 */
export function createWorkspaceExecutorEvent<Type extends keyof WorkspaceExecutorEventDataByType>(
  type: Type,
  data: WorkspaceExecutorEventDataByType[Type]
): WorkspaceExecutorEvent<Type> {
  const id = generateWorkspaceExecutorEventId();
  return {
    data,
    id,
    type,
  };
}
