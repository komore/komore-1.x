import { type SQSClientConfig } from '@aws-sdk/client-sqs';

import { type AwsClientOptions } from '@komore/aws';

/**
 * SQS client options
 */
export interface SqsClientOptions extends AwsClientOptions<SQSClientConfig> {}
