import { randomUUID } from '@komore/uuid';

import { type WorkspaceExecutorEventId } from './workspace-executor-event-id';

/**
 * Generates a workspace executor event identifier
 *
 * @returns Workspace executor event identifier
 * @private
 */
export function generateWorkspaceExecutorEventId(): WorkspaceExecutorEventId {
  return randomUUID() as WorkspaceExecutorEventId;
}
