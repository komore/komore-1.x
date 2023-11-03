import { type CommandFromType, type GenericCommandType } from '@komore/command';
import { type ErrorInstance, type ErrorTypeDefinitions, type GenericErrorType } from '@komore/error';
import { type EventFromType, type GenericEventType } from '@komore/event';
import { type GenericQueryType, type QueryPropertiesType, type QueryResultType } from '@komore/query';
import { type Observable } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * AWS client
 *
 * @template AwsCommandType AWS command type
 * @template AwsCommandEventMapping AWS command event mapping
 * @template AwsEventType AWS event type
 * @template AwsQueryType AWS query type
 * @template AwsErrorType AWS error type
 */
export interface AwsClient<
  AwsCommandType extends GenericCommandType,
  AwsCommandEventMapping extends ReadonlyRecord<keyof AwsCommandType, keyof AwsEventType>, // TODO: better constraints
  AwsEventType extends GenericEventType,
  AwsQueryType extends GenericQueryType,
  AwsErrorType extends GenericErrorType,
> {
  /**
   * Stream of errors caused by the client
   */
  readonly errors: Observable<ErrorInstance<AwsErrorType, keyof ErrorTypeDefinitions<AwsErrorType>>>;
  /**
   * Stream of events caused by the client
   */
  readonly events: Observable<EventFromType<AwsEventType>>;
  /**
   * Executes an S3 command
   *
   * @param command S3 command
   */
  execute(command: CommandFromType<AwsCommandType>): Observable<void>;
  /**
   * Returns the result from a query
   *
   * @param query Query
   * @returns Query result
   */
  query<QueryName extends keyof AwsQueryType>(
    query: QueryPropertiesType<AwsQueryType[QueryName]>
  ): Observable<QueryResultType<AwsQueryType[QueryName]>>;
  /**
   * Executes a command and waits for a single event to occur
   *
   * @param command Command
   * @param eventName Event name
   * @returns Event caused by the command
   */
  <CommandName extends keyof AwsCommandType>(
    command: AwsCommandType[CommandName]
  ): Observable<AwsEventType[AwsCommandEventMapping[CommandName]]>;
  <CommandName extends keyof AwsCommandType, EventName extends keyof AwsEventType>(
    command: CommandFromType<AwsCommandType>[CommandName],
    eventName: EventName
  ): Observable<EventFromType<AwsEventType[EventName]>>;
}
