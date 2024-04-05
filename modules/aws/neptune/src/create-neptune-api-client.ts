import { createAwsApiClient } from '@komore/aws';

import { type NeptuneApiClient } from './neptune-api-client';
import { type NeptuneApiClientOptions } from './neptune-api-client-options';

/**
 * Creates a Neptune API client
 *
 * @param clientOptions Neptune API client options
 * @returns Neptune API client
 */
export function createNeptuneApiClient(clientOptions: NeptuneApiClientOptions): NeptuneApiClient {
  const { ...awsClientOptions } = clientOptions;
  return createAwsApiClient({ ...awsClientOptions, service: 'neptune', strategies: { parameters, result, signature } });
}
