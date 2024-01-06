import { type GenericCommand } from '@komore/command';
import { type GenericEvent } from '@komore/event';

export type CommandEventPair<CommandType extends GenericCommand, EventType extends GenericEvent> = readonly [
  command: CommandType,
  event: EventType,
];
