import { type CommandType as GenericCommandType } from '@komore/command';
import { type EventType as GenericEventType } from '@komore/event';

import { type CommandEventPairFromType } from './command-event-pair-from-type';

/**
 * Command-event recorder
 *
 * @template CommandType Command type
 * @template EventType Event type
 */
export interface CommandEventRecorder<CommandType extends GenericCommandType, EventType extends GenericEventType> {
  (pair: CommandEventPairFromType<CommandType, EventType>): void;
}
