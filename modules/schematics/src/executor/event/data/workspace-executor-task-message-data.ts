import { type ReadonlyRecord } from '@komore/typescript';

import { type WorkspaceExecutorTaskEventData } from './workspace-executor-task-event-data';

/**
 * Workspace executor task message event data
 */
export interface WorkspaceExecutorTaskMessageEventData extends WorkspaceExecutorTaskEventData {
  /**
   * Message identifier
   */
  readonly messageId: string;
  /**
   * Message parameters
   */
  readonly messageParameters?: ReadonlyRecord<string, string>;
}
