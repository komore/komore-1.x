import { type CommandFromType, type GenericCommandType } from '@komore/command';
import { type EventFromType, type GenericEventType } from '@komore/event';

import { type CommandEventPair } from './command-event-pair';

/**
 * Command-event pair from type
 */
export type CommandEventPairFromType<
  CommandType extends GenericCommandType,
  EventType extends GenericEventType,
> = CommandEventPair<CommandFromType<CommandType>, EventFromType<EventType>>;
