import { createAwsApiClient } from '@komore/aws';

import { type SnsApiClient } from './sns-api-client';
import { type SnsApiClientOptions } from './sns-api-client-options';

/**
 * Creates an SNS API client
 *
 * @param clientOptions SNS API client options
 * @returns SNS API client
 */
export function createSnsApiClient(clientOptions: SnsApiClientOptions): SnsApiClient {
  const { ...awsClientOptions } = clientOptions;
  return createAwsApiClient({ ...awsClientOptions, service: 'sns' });
}
