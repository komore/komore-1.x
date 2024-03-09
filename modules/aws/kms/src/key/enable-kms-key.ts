import { type KmsApiClient } from '../kms-api-client';
import { kmsTargetPrefix } from '../kms-target-prefix';
import { type EnableKmsKeyParameters } from './enable-kms-key-parameters';

/**
 * Creates a function that enables a KMS key
 *
 * @param apiClient Kms API client
 * @returns Function that enables a KMS key
 * @see {@link https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKey.html EnableKey}
 */
export function enableKmsKey(apiClient: KmsApiClient): (parameters: EnableKmsKeyParameters) => Observable<void> {
  return parameters =>
    apiClient({
      operation: `${kmsTargetPrefix}.EnableKey`,
      parameters,
    });
}
