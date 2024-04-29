import { type SecretsManagerApiClient } from '../secrets-manager-api-client';
import { type RotateSecretsManagerSecretParameters } from './rotate-secrets-manager-secret-parameters';
import { type RotateSecretsManagerSecretResult } from './rotate-secrets-manager-secret-result';

/**
 * Creates a function that rotates a Secrets Manager secret
 *
 * @param apiClient Secrets Manager API client
 * @returns Function that rotates a Secrets Manager secret
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_RotateSecret.html RotateSecret}
 */
export function rotateSecretsManagerSecret(
  apiClient: SecretsManagerApiClient
): (parameters: RotateSecretsManagerSecretParameters) => Observable<RotateSecretsManagerSecretResult> {
  const operation = 'RotateSecret';
  return parameters => apiClient({ operation, parameters });
}
