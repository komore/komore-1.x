import {
  type GenericWorkspaceExecutorEvent,
  type WorkspaceExecutorTaskBeginEventData,
  type WorkspaceExecutorTaskEndEventData,
  type WorkspaceExecutorTaskMessageEventData,
} from '@komore/schematics';

/**
 * Creates a function that outputs workspace executor events
 *
 * @returns Function that outputs workspace executor events
 * @deprecated Should be moved into the CLI commands
 */
export function workspaceExecutorEventToCliOutput(console: Console): (event: GenericWorkspaceExecutorEvent) => void {
  const log = (str: string, ...parameters: ReadonlyArray<unknown>) => console.log(str, ...parameters);

  return event => {
    // TODO: matchWorkspaceExecutorEvent
    switch (event.type) {
      case 'task.begin':
        {
          const { taskId } = event.data as WorkspaceExecutorTaskBeginEventData;
          log(`task ${taskId} begun`);
        }
        break;
      case 'task.end':
        {
          const { taskId } = event.data as WorkspaceExecutorTaskEndEventData;
          log(`task ${taskId} ended`);
        }
        break;
      case 'task.message':
        {
          const { taskId, messageId, messageParameters } = event.data as WorkspaceExecutorTaskMessageEventData;
          log(`task ${taskId} message: ${messageId}`, messageParameters);
        }
        break;
      default:
        {
          log(`unknown workspace executor event tpe "${event.type}"`);
          console.log('event', event);
        }
        break;
    }
  };
}
