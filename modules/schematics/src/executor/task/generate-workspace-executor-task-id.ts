import { randomUUID } from '@komore/uuid';

import { type WorkspaceExecutorTaskId } from './workspace-executor-task-id';

/**
 * Generates a workspace executor task identifier
 *
 * @returns Workspace executor task identifier
 * @private
 */
export function generateWorkspaceExecutorTaskId(): WorkspaceExecutorTaskId {
  return randomUUID() as WorkspaceExecutorTaskId;
}
