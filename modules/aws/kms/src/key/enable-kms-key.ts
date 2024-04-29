import { type KmsApiClient } from '../kms-api-client';
import { type EnableKmsKeyParameters } from './enable-kms-key-parameters';

/**
 * Creates a function that enables a KMS key
 *
 * @param apiClient Kms API client
 * @returns Function that enables a KMS key
 * @see {@link https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKey.html EnableKey}
 */
export function enableKmsKey(apiClient: KmsApiClient): (parameters: EnableKmsKeyParameters) => Observable<void> {
  const operation = 'EnableKey';
  return parameters => apiClient({ operation, parameters });
}
