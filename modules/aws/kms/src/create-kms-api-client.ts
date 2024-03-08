import { createAwsApiClient } from '@komore/aws';

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
  return createAwsApiClient({ ...awsClientOptions, service: 'kms' });
}
