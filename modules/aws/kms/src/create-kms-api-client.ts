import {
  awsApiClientDefaultUrlStrategy,
  awsApiClientHeaderSignatureStrategy,
  awsApiClientJsonParametersStrategy,
  awsApiClientJsonResultStrategy,
  createAwsApiClient,
} from '@komore/aws';

import { type KmsApiClient } from './kms-api-client';
import { type KmsApiClientOptions } from './kms-api-client-options';

/**
 * Creates a KMS API client
 *
 * @param clientOptions KMS API client options
 * @returns KMS API client
 */
export function createKmsApiClient(clientOptions: KmsApiClientOptions): KmsApiClient {
  const { ...awsClientOptions } = clientOptions;
  const service = 'kms';
  const targetPrefix = 'TrentService';
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
