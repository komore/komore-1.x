import { type CommandFromType, type CommandHandler, type CommandType as GenericCommandType } from '@komore/command';
import { type EventType as GenericEventType } from '@komore/event';

import { type ClientCommandHandlerFactoryOptions } from './client-command-handler-factory-options';

/**
 * Client command handler factory
 *
 * @template CommandType Command type
 * @template EventType Event type
 */
export interface ClientCommandHandlerFactory<
  CommandType extends GenericCommandType,
  EventType extends GenericEventType,
> {
  (
    factoryOptions: ClientCommandHandlerFactoryOptions<CommandType, EventType>
  ): CommandHandler<CommandFromType<CommandType>>;
}
