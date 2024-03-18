import { type Command } from '@komore/command';
import { type Event } from '@komore/event';

import { type CommandEventPair } from './command-event-pair';

export function toEventCausedByCommand<CommandType extends Command>(
  command: CommandType
): <EventType extends Event>(event: EventType) => CommandEventPair<CommandType, EventType> {
  return event => [command, event];
}
