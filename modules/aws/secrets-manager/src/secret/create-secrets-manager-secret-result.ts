import { type SecretsManagerSecretArn } from './arn/secrets-manager-secret-arn';
import { type SecretsManagerSecretName } from './name/secrets-manager-secret-name';
import { type SecretsManagerSecretReplicationStatus } from './replication/secrets-manager-secret-replication-status';
import { type SecretsManagerSecretVersionId } from './version/id/secrets-manager-secret-version-id';

/**
 * Create Secrets Manager secret result
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#API_CreateSecret_ResponseElements CreateSecret Response Elements}
 */
export interface CreateSecretsManagerSecretResult {
  /**
   * Secret ARN
   */
  readonly ARN: SecretsManagerSecretArn;
  /**
   * Secret name
   */
  readonly Name: SecretsManagerSecretName;
  /**
   * Secret replication status
   */
  readonly ReplicationStatus: SecretsManagerSecretReplicationStatus;
  /**
   * Secret version identifier
   */
  readonly VersionId: SecretsManagerSecretVersionId;
}
