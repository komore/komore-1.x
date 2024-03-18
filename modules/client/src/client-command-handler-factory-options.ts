import { type CommandType as GenericCommandType } from '@komore/command';
import { type EventType as GenericEventType } from '@komore/event';

import { type CommandEventRecorder } from './command-event-map/command-event-recorder';

/**
 * Client command handler factory options
 *
 * @template CommandType Command type
 * @template EventType Event type
 */
export interface ClientCommandHandlerFactoryOptions<
  CommandType extends GenericCommandType,
  EventType extends GenericEventType,
> {
  /**
   * Command-event recorder
   */
  readonly toEvents: CommandEventRecorder<CommandType, EventType>;
}
