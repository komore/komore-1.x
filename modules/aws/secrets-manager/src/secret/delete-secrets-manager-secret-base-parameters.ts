import { type SecretsManagerSecretArn } from './arn/secrets-manager-secret-arn';
import { type SecretsManagerSecretName } from './name/secrets-manager-secret-name';

/**
 * Delete Secrets Manager secret base parameters
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DeleteSecret.html#API_DeleteSecret_RequestParameters DeleteSecret Request Parameters}
 */
export interface DeleteSecretsManagerSecretBaseParameters {
  /**
   * Secret name or ARN
   */
  readonly SecretId: SecretsManagerSecretArn | SecretsManagerSecretName;
}
