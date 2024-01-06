import { type GenericCommand } from '@komore/command';
import { type GenericEvent } from '@komore/event';

import { type CommandEventPair } from './command-event-pair';

export function toEventCausedByCommand<CommandType extends GenericCommand>(
  command: CommandType
): <EventType extends GenericEvent>(event: EventType) => CommandEventPair<CommandType, EventType> {
  return event => [command, event];
}
