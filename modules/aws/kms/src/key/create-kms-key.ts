import { type KmsApiClient } from '../kms-api-client';
import { type CreateKmsKeyParameters } from './create-kms-key-parameters';
import { type CreateKmsKeyResult } from './create-kms-key-result';

/**
 * Creates a function that creates a KMS key
 *
 * @param apiClient KMS API client
 * @returns Function that creates a KMS key
 * @see {@link https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateKey.html CreateKey}
 */
export function createKmsKey(
  apiClient: KmsApiClient
): (parameters: CreateKmsKeyParameters) => Observable<CreateKmsKeyResult> {
  const operation = 'CreateKey';
  return parameters => apiClient({ operation, parameters });
}
