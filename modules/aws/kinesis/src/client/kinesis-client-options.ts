import { type KinesisClientConfig } from '@aws-sdk/client-kinesis';

import { type AwsClientOptions } from '@komore/aws';

/**
 * Kinesis client options
 */
export interface KinesisClientOptions extends AwsClientOptions<KinesisClientConfig> {}
