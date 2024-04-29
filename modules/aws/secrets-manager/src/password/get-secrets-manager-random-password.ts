import { type SecretsManagerApiClient } from '../secrets-manager-api-client';
import { type GetSecretsManagerRandomPasswordParameters } from './get-secrets-manager-random-password-parameters';
import { type GetSecretsManagerRandomPasswordResult } from './get-secrets-manager-random-password-result';

/**
 * Creates a function that generates a random password using Secrets Manager
 *
 * @param apiClient Secrets Manager API client
 * @returns Function that generates a random password using Secrets Manager
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetRandomPassword.html GetRandomPassword}
 */
export function getSecretsManagerRandomPassword(
  apiClient: SecretsManagerApiClient
): (parameters: GetSecretsManagerRandomPasswordParameters) => Observable<GetSecretsManagerRandomPasswordResult> {
  const operation = 'GetRandomPassword';
  return parameters => apiClient({ operation, parameters });
}
