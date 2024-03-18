import { createAwsApiClient } from '@komore/aws';

import { type TranslateApiClient } from './translate-api-client';
import { type TranslateApiClientOptions } from './translate-api-client-options';

/**
 * Creates a Translate API client
 *
 * @param clientOptions Translate API client options
 * @returns Translate API client
 */
export function createTranslateApiClient(clientOptions: TranslateApiClientOptions): TranslateApiClient {
  const { ...awsClientOptions } = clientOptions;
  return createAwsApiClient({ ...awsClientOptions, service: 'translate' });
}
