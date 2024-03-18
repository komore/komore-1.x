import { type CommandFromType, type CommandType as GenericCommandType } from '@komore/command';
import { type EventFromType, type EventType as GenericEventType } from '@komore/event';

import { type CommandEventPair } from './command-event-pair';

/**
 * Command-event pair from type
 */
export type CommandEventPairFromType<
  CommandType extends GenericCommandType,
  EventType extends GenericEventType,
> = CommandEventPair<CommandFromType<CommandType>, EventFromType<EventType>>;
