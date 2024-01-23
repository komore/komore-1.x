import { type GenericCommand } from '@komore/command';
import { type GenericEvent } from '@komore/event';

/**
 * Command-event pair
 */
export type CommandEventPair<CommandType extends GenericCommand, EventType extends GenericEvent> = readonly [
  command: CommandType,
  event: EventType,
];
