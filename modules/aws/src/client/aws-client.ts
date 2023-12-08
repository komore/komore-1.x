import { type Client } from '@komore/client';
import { type GenericCommandType } from '@komore/command';
import { type GenericErrorType } from '@komore/error';
import { type GenericEventType } from '@komore/event';
import { type GenericQueryType } from '@komore/query';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * AWS client
 *
 * @template AwsCommandType AWS command type
 * @template AwsEventType AWS event type
 * @template AwsQueryType AWS query type
 * @template AwsErrorType AWS error type
 * @template AwsCommandEventMapType AWS command-to-event map type
 */
export type AwsClient<
  AwsCommandType extends GenericCommandType,
  AwsEventType extends GenericEventType,
  AwsQueryType extends GenericQueryType,
  AwsErrorType extends GenericErrorType,
  AwsCommandEventMapType extends ReadonlyRecord<keyof AwsCommandType, keyof AwsEventType>,
> = Client<AwsCommandType, AwsEventType, AwsQueryType, AwsErrorType, AwsCommandEventMapType>;
