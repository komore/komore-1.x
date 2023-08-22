import { type ReadonlyRecord } from '@komore/typescript';

import { type WorkspaceExecutorTaskEventData } from './workspace-executor-task-event-data';
import { type WorkspaceExecutorTaskMessageEventDataMessageType } from './workspace-executor-task-message-event-data-message-type';

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
  /**
   * Message type
   */
  readonly messageType: WorkspaceExecutorTaskMessageEventDataMessageType;
}
