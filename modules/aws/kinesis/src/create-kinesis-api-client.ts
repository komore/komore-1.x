import { createAwsApiClient } from '@komore/aws';

import { type KinesisApiClient } from './kinesis-api-client';
import { type KinesisApiClientOptions } from './kinesis-api-client-options';

/**
 * Creates a Kinesis API client
 *
 * @param clientOptions Kinesis API client options
 * @returns Kinesis API client
 */
export function createKinesisApiClient(clientOptions: KinesisApiClientOptions): KinesisApiClient {
  const { ...awsClientOptions } = clientOptions;
  return createAwsApiClient({ ...awsClientOptions, service: 'kinesis' });
}
