import { cliEvent, type CliEvent, type DisplayedCliMessageType } from '@komore/cli';
import { type GenericWorkspaceExecutorEvent, type WorkspaceExecutorEvent } from '@komore/schematics';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Returns a command-line interface event, given a workspace executor event
 *
 * @param event Workspace executor event
 * @returns Command-line interface event
 */
export function workspaceExecutorEventToCliEvent(event: GenericWorkspaceExecutorEvent): CliEvent {
  switch (event.type) {
    case 'task.begin': {
      const { data } = event as WorkspaceExecutorEvent<'task.begin'>;
      return cliEvent.messageDisplayed({ message: `#${data.taskId} task started` });
    }
    case 'task.end': {
      const { data } = event as WorkspaceExecutorEvent<'task.end'>;
      return cliEvent.messageDisplayed({ message: `#${data.taskId} task ended` });
    }
    case 'task.error': {
      const taskErrorEvent = event as WorkspaceExecutorEvent<'task.error'>;
      const { error, taskId } = taskErrorEvent.data;
      return cliEvent.messageDisplayed({
        message: `${taskId} task error: ${error.message} (${error.domain}.${error.code})`,
        options: { type: 'failure' },
      });
    }
    case 'task.message': {
      const taskMessageEvent = event as WorkspaceExecutorEvent<'task.message'>;
      const { messageId, messageParameters, messageType, taskId } = taskMessageEvent.data;
      const type = displayedCliMessageTypeByTaskMessageType[messageType];
      const message =
        `#${taskId} ${messageId}` + (messageParameters ? `\n${JSON.stringify(messageParameters, undefined, 2)}` : '');
      return cliEvent.messageDisplayed({
        message,
        options: { type },
      });
    }
  }
}

const displayedCliMessageTypeByTaskMessageType: ReadonlyRecord<
  WorkspaceExecutorEvent<'task.message'>['data']['messageType'],
  DisplayedCliMessageType
> = {
  failure: 'failure',
  normal: 'normal',
  success: 'success',
  warning: 'warning',
};
