import { type GenericCommandType } from '@komore/command';
import { type ErrorInstance, type GenericErrorType } from '@komore/error';
import { type EventFromType, type GenericEventType } from '@komore/event';
import { type GenericQueryType } from '@komore/query';
import { EMPTY, Subject } from '@komore/reactive';
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
  const { command, error, event } = clientOptions;
  const eventsSubject = new Subject<EventFromType<EventType>>();
  const events = eventsSubject.asObservable();
  const errorsSubject = new Subject<ErrorInstance<ErrorType, string, unknown>>();
  const errors = errorsSubject.asObservable();

  const client = () => EMPTY;
  const execute = () => EMPTY;
  const query = () => EMPTY;

  client.errors = errors;
  client.events = events;
  client.execute = execute;
  client.query = query;

  return client;
}
