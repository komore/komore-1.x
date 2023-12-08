import { type Client, type MetadataBearer } from '@smithy/types';

import { type ClientOptions } from '@komore/client';
import { type GenericCommandType } from '@komore/command';
import { type GenericErrorType } from '@komore/error';
import { type GenericEventType } from '@komore/event';
import { type GenericQueryType } from '@komore/query';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * AWS client options
 *
 * @template AwsClientType AWS client type
 * @template AwsCommandType Command type
 * @template AwsEventType Event type
 * @template AwsQueryType Query type
 * @template AwsErrorType Error type
 * @template AwsCommandEventMapType AWS command-to-event map type
 */
export interface AwsClientOptions<
  AwsClientType extends Client<object, MetadataBearer, unknown>,
  AwsCommandType extends GenericCommandType,
  AwsEventType extends GenericEventType,
  AwsQueryType extends GenericQueryType,
  AwsErrorType extends GenericErrorType,
  // TODO: better constraints
  AwsCommandEventMapType extends ReadonlyRecord<
    keyof AwsCommandType,
    keyof AwsEventType | ReadonlyArray<keyof AwsEventType>
  >,
> extends ClientOptions<AwsCommandType, AwsEventType, AwsQueryType, AwsErrorType, AwsCommandEventMapType> {
  /**
   * AWS client
   */
  readonly client: AwsClientType;
}
