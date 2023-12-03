import { type ReadonlyRecord } from '@komore/typescript';

import { type WorkspaceExecutorTaskId } from '../task/workspace-executor-task-id';
import { createWorkspaceExecutorEvent } from './create-workspace-executor-event';
import { type WorkspaceExecutorTaskMessageEventDataMessageType } from './data/workspace-executor-task-message-event-data-message-type';
import { type WorkspaceExecutorEvent } from './workspace-executor-event';

export function toWorkspaceExecutorTaskMessageEvent<T>(
  taskId: WorkspaceExecutorTaskId,
  messageId: string,
  messageParameters?: ReadonlyRecord<string, string>
): (value: T) => WorkspaceExecutorEvent<'task.message'>;
export function toWorkspaceExecutorTaskMessageEvent<T>(
  taskId: WorkspaceExecutorTaskId,
  project: ProjectionFunction<T>
): (value: T) => WorkspaceExecutorEvent<'task.message'>;

export function toWorkspaceExecutorTaskMessageEvent<T>(
  taskId: WorkspaceExecutorTaskId,
  messageIdOrProject: string | ProjectionFunction<T>,
  messageParameters?: ReadonlyRecord<string, string>
): (value: T) => WorkspaceExecutorEvent<'task.message'> {
  if (typeof messageIdOrProject === 'string') {
    const messageId = messageIdOrProject;
    return _value =>
      createWorkspaceExecutorEvent('task.message', {
        messageId,
        ...(messageParameters !== undefined ? { messageParameters } : {}),
        messageType: 'normal',
        taskId,
      });
  }

  const project = messageIdOrProject;
  return value => {
    const result = project(value);
    const [messageId, messageParameters, messageType = 'normal'] =
      typeof result === 'string' ? [result, undefined, undefined] : result;
    return createWorkspaceExecutorEvent('task.message', {
      messageId,
      ...(messageParameters !== undefined ? { messageParameters } : {}),
      messageType,
      taskId,
    });
  };
}

type ProjectionFunction<T> = (
  value: T
) =>
  | string
  | readonly [
      messageId: string,
      messageParameters?: ReadonlyRecord<string, string> | undefined,
      messageType?: WorkspaceExecutorTaskMessageEventDataMessageType | undefined,
    ];
