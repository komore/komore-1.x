import { createAwsApiClient } from '@komore/aws';

import { type ChimeApiClient } from './chime-api-client';
import { type ChimeApiClientOptions } from './chime-api-client-options';

/**
 * Creates a Chime API client
 *
 * @param clientOptions Chime API client options
 * @returns Chime API client
 */
export function createChimeApiClient(clientOptions: ChimeApiClientOptions): ChimeApiClient {
  const { ...awsClientOptions } = clientOptions;
  const service = 'chime';
  return createAwsApiClient({
    ...awsClientOptions,
    service,
    strategies: {
      parameters,
      result,
      signature,
      url,
    },
  });
}
