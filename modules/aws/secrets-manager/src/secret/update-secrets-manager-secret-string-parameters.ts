import { type UpdateSecretsManagerSecretBaseParameters } from './update-secrets-manager-secret-base-parameters';

/**
 * Update Secrets Manager secret string parameters
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_UpdateSecret.html#API_UpdateSecret_RequestParameters UpdateSecret Request Parameters}
 */
export interface UpdateSecretsManagerSecretStringParameters extends UpdateSecretsManagerSecretBaseParameters {
  /**
   * Secret string
   */
  readonly SecretString: string;
}
