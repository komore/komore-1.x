import { type ReadonlyRecord } from '@komore/typescript';

import { type WorkspaceExecutorEvent } from './workspace-executor-event';
import { createWorkspaceExecutorEvent } from './create-workspace-executor-event';
import { WorkspaceExecutorTaskId } from '../task/workspace-executor-task-id';

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
        taskId,
      });
  }

  const project = messageIdOrProject;
  return value => {
    const result = project(value);
    const [messageId, messageParameters] = typeof result === 'string' ? [result, undefined] : result;
    return createWorkspaceExecutorEvent('task.message', {
      messageId,
      ...(messageParameters !== undefined ? { messageParameters } : {}),
      taskId,
    });
  };
}

type ProjectionFunction<T> = (
  value: T
) => string | readonly [messageId: string, messageParameters: ReadonlyRecord<string, string> | undefined];
