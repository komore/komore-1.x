import { type KmsApiClient } from '../kms-api-client';
import { kmsTargetPrefix } from '../kms-target-prefix';

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
  return parameters =>
    apiClient({
      operation: `${kmsTargetPrefix}.EnableKeyRotation`,
      parameters,
    });
}
