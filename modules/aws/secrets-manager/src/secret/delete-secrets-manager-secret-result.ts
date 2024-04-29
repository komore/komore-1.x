import { type SecretsManagerSecretArn } from './arn/secrets-manager-secret-arn';
import { type SecretsManagerSecretName } from './name/secrets-manager-secret-name';

/**
 * Delete Secrets Manager secret result
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DeleteSecret.html#API_DeleteSecret_ResponseElements}
 */
export interface DeleteSecretsManagerSecretResult {
  /**
   * Secret ARN
   */
  readonly ARN: SecretsManagerSecretArn;
  /**
   * Deletion date and time
   */
  readonly DeletionDate: EpochTimeStamp;
  /**
   * Secret name
   */
  readonly Name: SecretsManagerSecretName;
}
