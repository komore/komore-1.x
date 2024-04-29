import { type SecretsManagerApiClient } from '../secrets-manager-api-client';
import { type UpdateSecretsManagerSecretParameters } from './update-secrets-manager-secret-parameters';
import { type UpdateSecretsManagerSecretResult } from './update-secrets-manager-secret-result';

/**
 * Creates a function that updates a Secret Manager's secret
 *
 * @param apiClient Secrets Manager API client
 * @returns Function that updates a Secret Manager's secret
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_UpdateSecret.html UpdateSecret}
 */
export function updateSecretsManagerSecret(
  apiClient: SecretsManagerApiClient
): (parameters: UpdateSecretsManagerSecretParameters) => Observable<UpdateSecretsManagerSecretResult> {
  const operation = 'UpdateSecret';
  return parameters => apiClient({ operation, parameters });
}
