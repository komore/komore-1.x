import { type CommandFromType, type GenericCommandType } from '@komore/command';
import { type ErrorFromType, type GenericErrorType } from '@komore/error';
import { type EventFromType, type GenericEventType } from '@komore/event';
import { type GenericQueryType, type QueryResultFromQuery } from '@komore/query';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Client
 *
 * @template CommandType Command type
 * @template EventType Event type
 * @template QueryType Query type
 * @template ErrorType Error type
 * @template CommandEventMapType Command-to-event map type
 */
export interface Client<
  CommandType extends GenericCommandType,
  EventType extends GenericEventType,
  QueryType extends GenericQueryType,
  ErrorType extends GenericErrorType,
  // TODO: better constraints + allow partial for commands that don't cause an event?
  CommandEventMapType extends ReadonlyRecord<keyof CommandType, keyof EventType | ReadonlyArray<keyof EventType>>,
> {
  /**
   * Stream of errors caused by the client
   */
  readonly errors: Observable<ErrorFromType<ErrorType>>;
  /**
   * Stream of events caused by the client
   */
  readonly events: Observable<EventFromType<EventType>>;
  /**
   * Executes a command
   *
   * @param command Command
   */
  execute(command: CommandFromType<CommandType>): Observable<void>;
  /**
   * Returns the result from a query
   *
   * @param query Query
   * @returns Query result
   * @template QueryName Query name
   */
  query<QueryName extends keyof QueryType>(
    query: ReturnType<QueryType[QueryName]>
  ): Observable<QueryResultFromQuery<ReturnType<QueryType[QueryName]>>>;
  /**
   * Executes a command and waits for a single event to occur
   *
   * @param command Command
   * @returns Event caused by the command
   * @template CommandType Command type
   */
  <CommandName extends keyof CommandEventMapType & keyof CommandType>(
    command: ReturnType<CommandType[CommandName]>
  ): Observable<ReturnType<EventType[CommandEventMapType[CommandName]]>>;
  /**
   * Executes a command and waits for a single specific event to occur
   *
   * @param command Command
   * @param eventName Event name
   * @returns Specific event caused by the command
   * @template CommandType Command type
   * @template EventName Event name
   */
  <CommandName extends keyof CommandType, EventName extends keyof EventType>(
    command: ReturnType<CommandType[CommandName]>,
    eventName: EventName
  ): Observable<EventFromType<Pick<EventType, EventName>>>;
}
