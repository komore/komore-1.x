import { createAwsApiClient } from '@komore/aws';

import { type SesApiClient } from './ses-api-client';
import { type SesApiClientOptions } from './ses-api-client-options';

/**
 * Creates an SES API client
 *
 * @param clientOptions SES API client options
 * @returs SES API client
 */
export function createSesApiClient(clientOptions: SesApiClientOptions): SesApiClient {
  const { ...awsClientOptions } = clientOptions;
  const service = 'ses';
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
