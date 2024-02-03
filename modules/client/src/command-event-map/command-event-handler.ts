import { type GenericCommandType } from '@komore/command';
import { type EventFromType, type GenericEventType } from '@komore/event';

/**
 * Command-to-event handler
 */
export type CommandEventHandler<
  CommandType extends GenericCommandType,
  CommandName extends keyof CommandType,
  EventType extends GenericEventType,
> = (command: ReturnType<CommandType[CommandName]>['parameters']) => Observable<EventFromType<EventType>>;
