import { type UUID } from '@komore/uuid';

/**
 * Workspace executor task identifier
 */
export type WorkspaceExecutorTaskId = UUID & {
  readonly __tag_workspaceExecutorTaskId: unique symbol;
};
