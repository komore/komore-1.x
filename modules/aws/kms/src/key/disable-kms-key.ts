import { type KmsApiClient } from '../kms-api-client';
import { type DisableKmsKeyParameters } from './disable-kms-key-parameters';

/**
 * Creates a function that disables a KMS key
 *
 * @param apiClient KMS API client
 * @returns Function that disables a KMS key
 */
export function disableKmsKey(apiClient: KmsApiClient): (parameters: DisableKmsKeyParameters) => Observable<void> {
  return parameters =>
    apiClient({
      operation: 'TrentService.DisableKey',
      parameters,
    });
}
