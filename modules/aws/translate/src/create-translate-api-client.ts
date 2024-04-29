import {
  awsApiClientDefaultUrlStrategy,
  awsApiClientHeaderSignatureStrategy,
  awsApiClientJsonParametersStrategy,
  awsApiClientJsonResultStrategy,
  createAwsApiClient,
} from '@komore/aws';

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
  const service = 'translate';
  const targetPrefix = 'Translate';
  return createAwsApiClient({
    ...awsClientOptions,
    service,
    strategies: {
      parameters: awsApiClientJsonParametersStrategy({ targetPrefix }),
      result: [awsApiClientJsonResultStrategy({})],
      signature: awsApiClientHeaderSignatureStrategy({}),
      url: awsApiClientDefaultUrlStrategy(),
    },
  });
}
