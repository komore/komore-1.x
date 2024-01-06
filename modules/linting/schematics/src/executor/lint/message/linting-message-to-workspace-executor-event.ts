import {
  toWorkspaceExecutorTaskMessageEvent,
  type WorkspaceExecutorEvent,
  type WorkspaceExecutorTaskId,
} from '@komore/schematics';

import { type LintingMessage } from './linting-message';

export function lintingMessageToWorkspaceExecutorEvent(
  taskId: WorkspaceExecutorTaskId
): (lintingMessage: LintingMessage) => WorkspaceExecutorEvent<'task.message'> {
  return toWorkspaceExecutorTaskMessageEvent(taskId, ({ columns, filePath, message, rows, ruleId }) => [
    'linting.error',
    {
      column: `${columns}`,
      filePath,
      message,
      row: `${rows}`,
      ruleId: ruleId ?? '',
    },
    'failure',
  ]);
}
