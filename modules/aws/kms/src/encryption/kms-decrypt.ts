import { type KmsApiClient } from '../kms-api-client';
import { kmsTargetPrefix } from '../kms-target-prefix';
import { type KmsDecryptParameters } from './kms-decrypt-parameters';
import { type KmsDecryptResult } from './kms-decrypt-result';

/**
 * Creates a function that decrypts using a KMS key
 *
 * @param apiClient KMS API client
 * @returns Function that decrypts using a KMS key
 * @see {@link https://docs.aws.amazon.com/kms/latest/APIReference/API_Decrypt.html Decrypt}
 */
export function kmsDecrypt(
  apiClient: KmsApiClient
): (parameters: KmsDecryptParameters) => Observable<KmsDecryptResult> {
  return parameters =>
    apiClient({
      operation: `${kmsTargetPrefix}.Decrypt`,
      parameters,
    });
}
