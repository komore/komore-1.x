import { createClient } from '@komore/client';
import { type GenericCommandType } from '@komore/command';
import { type GenericErrorType } from '@komore/error';
import { type GenericEventType } from '@komore/event';
import { type GenericQueryType } from '@komore/query';
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
  AwsClientClass extends Client<object, MetadataBearer, unknown>,
  AwsCommandType extends GenericCommandType,
  AwsEventType extends GenericEventType,
  AwsQueryType extends GenericQueryType,
  AwsErrorType extends GenericErrorType,
  // TODO: better constraints
  AwsCommandEventMapType extends ReadonlyRecord<keyof AwsCommandType, keyof AwsEventType>,
>(
  awsClientOptions: AwsClientOptions<
    AwsClientClass,
    AwsCommandType,
    AwsEventType,
    AwsQueryType,
    AwsErrorType,
    AwsCommandEventMapType
  >
): AwsClient<AwsCommandType, AwsEventType, AwsQueryType, AwsErrorType, AwsCommandEventMapType> {
  const { client: clientFactory, commandHandler: _, ...clientOptions } = awsClientOptions;
  const client$ = clientFactory();
  client$;
  clientOptions;

  /*return */ createClient; /*({
    ...clientOptions,
    commandHandler: events =>
  });*/
  return void 0 as unknown as AwsClient<
    AwsCommandType,
    AwsEventType,
    AwsQueryType,
    AwsErrorType,
    AwsCommandEventMapType
  >;
}
