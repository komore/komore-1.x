import {
  awsApiClientDefaultUrlStrategy,
  awsApiClientHeaderSignatureStrategy,
  awsApiClientJsonParametersStrategy,
  awsApiClientJsonResultStrategy,
  createAwsApiClient,
} from '@komore/aws';

import { type ComprehendApiClient } from './comprehend-api-client';
import { type ComprehendApiClientOptions } from './comprehend-api-client-options';

/**
 * Creates a Comprehend API client
 *
 * @param clientOptions Comprehend API client options
 * @returns Comprehend API client
 */
export function createComprehendApiClient(clientOptions: ComprehendApiClientOptions): ComprehendApiClient {
  const { ...awsClientOptions } = clientOptions;
  const service = 'comprehend';
  const targetPrefix = 'Comprehend_20171127';
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
