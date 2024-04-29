import { type SecretsManagerSecretArn } from './arn/secrets-manager-secret-arn';
import { type SecretsManagerSecretName } from './name/secrets-manager-secret-name';
import { type SecretsManagerSecretVersionId } from './version/id/secrets-manager-secret-version-id';

/**
 * Update Secrets Manager secret result
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_UpdateSecret.html#API_UpdateSecret_ResponseElements UpdateSecret Response Elements}
 */
export interface UpdateSecretsManagerSecretResult {
  /**
   * Secret ARN
   */
  readonly ARN: SecretsManagerSecretArn;
  /**
   * Secret name
   */
  readonly Name: SecretsManagerSecretName;
  /**
   * Secret version identifier
   */
  readonly VersionId: SecretsManagerSecretVersionId;
}
