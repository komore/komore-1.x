import { type DeleteSecretsManagerSecretBaseParameters } from './delete-secrets-manager-secret-base-parameters';

/**
 * Delete Secrets Manager secret parameters without recovery
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DeleteSecret.html#API_DeleteSecret_RequestParameters DeleteSecret Request Parameters}
 */
export interface DeleteSecretsManagerSecretParametersWithoutRecovery extends DeleteSecretsManagerSecretBaseParameters {
  /**
   * Whether the secret should be deleted without a recovery window
   */
  readonly ForceDeleteWithoutRecovery: true;
}
