import { type UUID } from '@komore/uuid';

/**
 * Workspace executor event identifier
 */
export type WorkspaceExecutorEventId = UUID & {
  readonly __tag_workspaceExecutorEventId: unique symbol;
};
