import { type CommandFromType, type GenericCommandType } from '@komore/command';
import { type ErrorFromType, type GenericErrorType } from '@komore/error';
import { type EventFromType, type EventName, type GenericEventType, isEventOfType } from '@komore/event';
import { type QueryFromType, type GenericQueryType } from '@komore/query';
import { filter, first, ignoreValues, map, merge, Subject, tapNext } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

import { type Client } from './client';
import { type ClientOptions } from './client-options';
import { type CommandEventPair } from './command-event-map/command-event-pair';

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
  const eventsSubject = new Subject<CommandEventPair<CommandFromType<CommandType>, EventFromType<EventType>>>();
  const events = eventsSubject.asObservable();
  const errorsSubject = new Subject<ErrorFromType<ErrorType>>();
  const errors = errorsSubject.asObservable();

  const commandHandler = clientOptions.commandHandler(event => eventsSubject.next(event));
  const queryHandler = clientOptions.queryHandler();

  const client = (command: CommandFromType<CommandType>, eventName: EventName<EventFromType<EventType>>) =>
    merge([
      events.pipe(
        filter(([sourceCommand]) => sourceCommand === command),
        map(([, event]) => event),
        filter(isEventOfType(event, eventName)),
        first(),
        tapNext(x => console.log('event received', x.properties))
      ),
      commandHandler(command).pipe(
        tapNext(() => console.log('command done')),
        ignoreValues()
      ),
    ]);
  const execute = (command: CommandFromType<CommandType>) => commandHandler(command);
  const query = (query: QueryFromType<QueryType>) => queryHandler(query);

  client.errors = errors;
  client.events = events;
  client.execute = execute;
  client.query = query;

  return client as Client<CommandType, EventType, QueryType, ErrorType, CommandEventMappingType>;
}
