import { type SNSClientConfig } from '@aws-sdk/client-sns';

import { type AwsClientOptions } from '@komore/aws';

/**
 * SNS client options
 */
export interface SnsClientOptions extends AwsClientOptions<SNSClientConfig> {}
