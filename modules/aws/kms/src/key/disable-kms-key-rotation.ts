import { type KmsApiClient } from '../kms-api-client';
import { type DisableKmsKeyRotationParameters } from './disable-kms-key-rotation-parameters';

/**
 * Creates a function that disables a KMS key rotation
 *
 * @param apiClient KMS API client
 * @returns Function that disables a KMS key rotation
 */
export function disableKmsKeyRotation(
  apiClient: KmsApiClient
): (parameters: DisableKmsKeyRotationParameters) => Observable<void> {
  const operation = 'DisableKeyRotation';
  return parameters => apiClient({ operation, parameters });
}
