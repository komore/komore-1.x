import { type CommandFromType, type CommandHandler, type GenericCommandType } from '@komore/command';
import { type GenericErrorType } from '@komore/error';
import { type EventFromType, type GenericEventType } from '@komore/event';
import { type GenericQueryType, type QueryFromType, type QueryHandler } from '@komore/query';
import { type Subject } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

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
  readonly commandHandler: CommandHandlerFactory<CommandType, EventType>;
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
  readonly queryHandler: QueryHandlerFactory<QueryType>;
}

/**
 * Command handler factory
 */
interface CommandHandlerFactory<CommandType extends GenericCommandType, EventType extends GenericEventType> {
  (events: Subject<EventFromType<EventType>>): CommandHandler<CommandFromType<CommandType>>;
}

/**
 * Query handler factory
 */
interface QueryHandlerFactory<QueryType extends GenericQueryType> {
  (): QueryHandler<QueryFromType<QueryType>>;
}
