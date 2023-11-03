import { type CommandFromType, type GenericCommandType } from '@komore/command';
import { type ErrorInstance, type ErrorTypeDefinitions, type GenericErrorType } from '@komore/error';
import { type EventFromType, type GenericEventType } from '@komore/event';
import { type GenericQueryType } from '@komore/query';
import { of, type Observable, Subject } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

import { type Client, type MetadataBearer } from '@smithy/types';

import { type AwsClient } from './aws-client';
import { type AwsClientOptions } from './aws-client-options';

/**
 * Creates an AWS client
 *
 * @param parameters AWS client parameters
 * @returns AWS client
 */
export function createAwsClient<
  AwsCommandType extends GenericCommandType,
  AwsEventType extends GenericEventType,
  AwsQueryType extends GenericQueryType,
  AwsErrorType extends GenericErrorType,
  AwsCommandEventMappingType extends ReadonlyRecord<keyof AwsCommandType, keyof AwsEventType>, // TODO: better constraints
  AwsClientType extends Client<object, MetadataBearer, AwsClientResolvedConfigType>,
  AwsOptionsConfigurationType,
  AwsClientResolvedConfigType extends AwsOptionsConfigurationType,
  AwsOptionsType extends AwsClientOptions<AwsOptionsConfigurationType>,
>(parameters: {
  readonly clientClass: new (...x: [AwsOptionsConfigurationType] | []) => AwsClientType;
  readonly clientOptions: AwsOptionsType;
  readonly commandEventMapping: AwsCommandEventMappingType;
  readonly commandType: AwsCommandType;
  readonly errorType: AwsErrorType;
  readonly eventType: AwsEventType;
  readonly queryType: AwsQueryType;
}): AwsClient<AwsCommandType, AwsCommandEventMappingType, AwsEventType, AwsQueryType, AwsErrorType> {
  const { clientClass, clientOptions } = parameters;
  const { configuration, logger: _ } = clientOptions;
  const eventsSubject = new Subject<EventFromType<AwsEventType>>();
  const events = eventsSubject.asObservable();
  const errorsSubject = new Subject<ErrorInstance<AwsErrorType, keyof ErrorTypeDefinitions<AwsErrorType>>>();
  const errors = errorsSubject.asObservable();

  const awsClient = configuration !== undefined ? new clientClass(configuration) : new clientClass();
  const client = (command: unknown): Observable<void> => {
    command;
    awsClient;
    return of(void 0);
  };

  Object.defineProperties(client, {
    errors: { enumerable: false, value: errors, writable: false },
    events: { enumerable: false, value: events, writable: false },
  });

  return client;
}
