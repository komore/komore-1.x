import { type SecretsManagerApiClient } from '../secrets-manager-api-client';
import { type CreateSecretsManagerSecretParameters } from './create-secrets-manager-secret-parameters';
import { type CreateSecretsManagerSecretResult } from './create-secrets-manager-secret-result';

/**
 * Creates a function that creates a Secrets Manager secret
 *
 * @param apiClient Secrets Manager API client
 * @returns Function that creates a Secrets Manager secret
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html CreateSecret}
 */
export function createSecretsManagerSecret(
  apiClient: SecretsManagerApiClient
): (parameters: CreateSecretsManagerSecretParameters) => Observable<CreateSecretsManagerSecretResult> {
  const operation = 'CreateSecret';
  return parameters => apiClient({ operation, parameters });
}
