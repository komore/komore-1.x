import { type DeleteSecretsManagerSecretParametersWithRecovery } from './delete-secrets-manager-secret-parameters-with-recovery';
import { type DeleteSecretsManagerSecretParametersWithoutRecovery } from './delete-secrets-manager-secret-parameters-without-recovery';

/**
 * Delete Secrets Manager secret parameters
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DeleteSecret.html#API_DeleteSecret_RequestParameters DeleteSecret Request Parameters}
 */
export type DeleteSecretsManagerSecretParameters =
  | DeleteSecretsManagerSecretParametersWithRecovery
  | DeleteSecretsManagerSecretParametersWithoutRecovery;
