import { type DeleteSecretsManagerSecretBaseParameters } from './delete-secrets-manager-secret-base-parameters';

/**
 * Delete Secrets Manager secret parameters with recovery
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DeleteSecret.html#API_DeleteSecret_RequestParameters DeleteSecret Request Parameters}
 */
export interface DeleteSecretsManagerSecretParametersWithRecovery extends DeleteSecretsManagerSecretBaseParameters {
  /**
   * Number of days before Secrets Manager permanently deletes the secret
   *
   * @note Must be a value between 7 and 30
   * @default 30
   */
  readonly RecoveryWindowInDays?: number;
}
