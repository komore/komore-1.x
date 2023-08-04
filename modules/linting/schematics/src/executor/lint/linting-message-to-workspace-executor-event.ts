import {
  toWorkspaceExecutorTaskMessageEvent,
  type WorkspaceExecutorEvent,
  type WorkspaceExecutorTaskId,
} from '@komore/schematics';

import { type LintingMessage } from './linting-message';

export function lintingMessageToWorkspaceExecutorEvent(
  taskId: WorkspaceExecutorTaskId
): (lintingMessage: LintingMessage) => WorkspaceExecutorEvent<'task.message'> {
  return toWorkspaceExecutorTaskMessageEvent(taskId, ({ column, filePath, message, row }) => [
    'blah',
    {
      column: `${column}`,
      filePath,
      message,
      row: `${row}`,
    },
  ]);
}
