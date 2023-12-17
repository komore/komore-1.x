import { type CommandFromType, type GenericCommandType } from '@komore/command';
import { type ErrorFromType, type GenericErrorType } from '@komore/error';
import { type EventFromType, type EventName, type GenericEventType, isEventOfType } from '@komore/event';
import { type QueryFromType, type GenericQueryType } from '@komore/query';
import { Subject, filter, first, ignoreValues, merge } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

import { type Client } from './client';
import { type ClientOptions } from './client-options';

/**
 * Creates a client
 *
 * @param clientOptions Client options
 * @returns Client
 */
export function createClient<
  CommandType extends GenericCommandType,
  EventType extends GenericEventType,
  QueryType extends GenericQueryType,
  ErrorType extends GenericErrorType,
  // TODO: better constraints
  CommandEventMappingType extends ReadonlyRecord<keyof CommandType, keyof EventType>,
>(
  clientOptions: ClientOptions<CommandType, EventType, QueryType, ErrorType, CommandEventMappingType>
): Client<CommandType, EventType, QueryType, ErrorType, CommandEventMappingType> {
  const { command: _command, error: _error, event } = clientOptions;
  const eventsSubject = new Subject<EventFromType<EventType>>();
  const events = eventsSubject.asObservable();
  const errorsSubject = new Subject<ErrorFromType<ErrorType>>();
  const errors = errorsSubject.asObservable();

  const commandHandler = clientOptions.commandHandler(eventsSubject);
  const queryHandler = clientOptions.queryHandler();

  const client = (command: CommandFromType<CommandType>, eventName: EventName<EventFromType<EventType>>) =>
    merge([
      events.pipe(filter(isEventOfType(event, eventName)), first()),
      commandHandler(command).pipe(ignoreValues()),
    ]);
  const execute = (command: CommandFromType<CommandType>) => commandHandler(command);
  const query = (query: QueryFromType<QueryType>) => queryHandler(query);

  client.errors = errors;
  client.events = events;
  client.execute = execute;
  client.query = query;

  return client as Client<CommandType, EventType, QueryType, ErrorType, CommandEventMappingType>;
}
