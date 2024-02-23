import { createAwsApiClient } from '@komore/aws';

import { type AuroraApiClient } from './aurora-api-client';
import { type AuroraApiClientOptions } from './aurora-api-client-options';

/**
 * Creates an Aurora API client
 *
 * @param clientOptions Aurora API client options
 * @returns Aurora API client
 */
export function createAuroraApiClient(clientOptions: AuroraApiClientOptions): AuroraApiClient {
  const { ...awsClientOptions } = clientOptions;
  return createAwsApiClient(awsClientOptions);
}
