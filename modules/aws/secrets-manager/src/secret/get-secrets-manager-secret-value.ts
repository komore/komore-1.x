import { type SecretsManagerApiClient } from '../secrets-manager-api-client';
import { type GetSecretsManagerSecretValueParameters } from './get-secrets-manager-secret-value-parameters';
import { type GetSecretsManagerSecretValueResult } from './get-secrets-manager-secret-value-result';

/**
 * Creates a function that returns a Secrets Manager secret's value
 *
 * @param apiClient Secrets Manager API client
 * @returns Function that returns a Secrets Manager secret's value
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html GetSecretValue}
 */
export function getSecretsManagerSecretValue(
  apiClient: SecretsManagerApiClient
): (parameters: GetSecretsManagerSecretValueParameters) => Observable<GetSecretsManagerSecretValueResult> {
  const operation = 'GetSecretValue';
  return parameters => apiClient({ operation, parameters });
}
