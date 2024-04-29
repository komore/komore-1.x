import { type SecretsManagerApiClient } from '../secrets-manager-api-client';
import { type DeleteSecretsManagerSecretParameters } from './delete-secrets-manager-secret-parameters';
import { type DeleteSecretsManagerSecretResult } from './delete-secrets-manager-secret-result';

/**
 * Creates a function that deletes a Secrets Manager secret
 *
 * @param apiClient Secrets Manager API client
 * @returns Function that deletes a Secrets Manager secret
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DeleteSecret.html DeleteSecret}
 */
export function deleteSecretsManagerSecret(
  apiClient: SecretsManagerApiClient
): (parameters: DeleteSecretsManagerSecretParameters) => Observable<DeleteSecretsManagerSecretResult> {
  const operation = 'DeleteSecret';
  return parameters => apiClient({ operation, parameters });
}
