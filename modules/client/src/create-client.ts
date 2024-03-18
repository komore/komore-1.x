import { type CommandFromType, type CommandType as GenericCommandType } from '@komore/command';
import { type ErrorFromType, type GenericErrorType } from '@komore/error';
import { isEventOfType, type EventFromType, type EventName, type EventType as GenericEventType } from '@komore/event';
import { objectWithProperties } from '@komore/functional';
import { type QueryFromType, type QueryType as GenericQueryType } from '@komore/query';
import { filter, first, ignoreValues, map, merge, Subject } from '@komore/reactive';
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

  const commandHandler = clientOptions.commandHandler({ toEvents: event => eventsSubject.next(event) });
  const queryHandler = clientOptions.queryHandler({});

  const client = (command: CommandFromType<CommandType>, eventName: EventName<EventFromType<EventType>>) =>
    merge([
      events.pipe(
        filter(([sourceCommand]) => sourceCommand === command),
        map(([, event]) => event),
        filter(isEventOfType(event, eventName)),
        first()
      ),
      commandHandler(command).pipe(ignoreValues()),
    ]);
  const execute = (command: CommandFromType<CommandType>) => commandHandler(command);
  const query = (query: QueryFromType<QueryType>) => queryHandler(query);

  return objectWithProperties(
    {
      errors,
      events,
      execute,
      query,
    },
    {
      configurable: false,
      enumerable: false,
    }
  )(client) as Client<CommandType, EventType, QueryType, ErrorType, CommandEventMappingType>;
}
