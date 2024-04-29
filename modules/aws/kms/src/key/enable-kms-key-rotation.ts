import { type KmsApiClient } from '../kms-api-client';
import { type EnableKmsKeyRotationParameters } from './enable-kms-key-rotation-parameters';

/**
 * Creates a function that enables a KMS key rotation
 *
 * @param apiClient Kms API client
 * @returns Function that enables a KMS key rotation
 * @see {@link https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKeyRotation.html EnableKeyRotation}
 */
export function enableKmsKeyRotation(
  apiClient: KmsApiClient
): (parameters: EnableKmsKeyRotationParameters) => Observable<void> {
  const operation = 'EnableKeyRotation';
  return parameters => apiClient({ operation, parameters });
}
