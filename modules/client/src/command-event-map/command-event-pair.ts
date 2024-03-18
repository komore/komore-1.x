import { type GenericCommand } from '@komore/command';
import { type Event } from '@komore/event';

/**
 * Command-event pair
 */
export type CommandEventPair<CommandType extends GenericCommand, EventType extends Event> = readonly [
  command: CommandType,
  event: EventType,
];
