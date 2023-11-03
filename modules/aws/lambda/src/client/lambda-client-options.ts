import { type LambdaClientConfig } from '@aws-sdk/client-lambda';

import { type AwsClientOptions } from '@komore/aws';

/**
 * Lambda client options
 */
export interface LambdaClientOptions extends AwsClientOptions<LambdaClientConfig> {}
