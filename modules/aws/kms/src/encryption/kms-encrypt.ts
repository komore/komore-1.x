import { type KmsApiClient } from '../kms-api-client';
import { type KmsEncryptParameters } from './kms-encrypt-parameters';
import { type KmsEncryptResult } from './kms-encrypt-result';

/**
 * Creates a function that encrypts using a KMS key
 *
 * @param apiClient KMS API client
 * @returns Function that encrypts using a KMS key
 * @see {@link https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html Encrypt}
 */
export function kmsEncrypt(
  apiClient: KmsApiClient
): (parameters: KmsEncryptParameters) => Observable<KmsEncryptResult> {
  const operation = 'Encrypt';
  return parameters => apiClient({ operation, parameters });
}
