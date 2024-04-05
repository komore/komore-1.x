import { type CommandType as GenericCommandType } from '@komore/command';
import { type ErrorType as GenericErrorType } from '@komore/error';
import { type EventType as GenericEventType } from '@komore/event';
import { type QueryType as GenericQueryType } from '@komore/query';
import { type ReadonlyRecord } from '@komore/typescript';

import { type ClientCommandHandlerFactory } from './client-command-handler-factory';
import { type ClientQueryHandlerFactory } from './client-query-handler-factory';

/**
 * Client options
 *
 * @template CommandType Command type
 * @template EventType Event type
 * @template QueryType Query type
 * @template ErrorType Error type
 * @template CommandEventMapType Command-to-event map type
 */
export interface ClientOptions<
  CommandType extends GenericCommandType,
  EventType extends GenericEventType,
  QueryType extends GenericQueryType,
  ErrorType extends GenericErrorType,
  // TODO: better constraints
  CommandEventMapType extends ReadonlyRecord<keyof CommandType, keyof EventType | ReadonlyArray<keyof EventType>>,
> {
  /**
   * Command type
   */
  readonly command: CommandType;
  /**
   * Command-to-event map
   */
  readonly commandEventMap: CommandEventMapType;
  /**
   * Command handler factory
   */
  readonly commandHandler: ClientCommandHandlerFactory<CommandType, EventType>;
  /**
   * Error type
   */
  readonly error: ErrorType;
  /**
   * Event type
   */
  readonly event: EventType;
  /**
   * Query type
   */
  readonly query: QueryType;
  /**
   * Query handler factory
   */
  readonly queryHandler: ClientQueryHandlerFactory<QueryType>;
}
