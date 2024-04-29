import { type AwsRegion } from '@komore/aws';
import { type KmsAliasName, type KmsKeyArn, type KmsKeyId } from '@komore/aws/kms';
import { type MillisecondsSinceEpoch } from '@komore/temporal';

import { type SecretsManagerReplicationStatus } from './secrets-manager-replication-status';

/**
 * Secrets Manager secret replication status
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_ReplicationStatusType.html ReplicationStatusType}
 */
export interface SecretsManagerSecretReplicationStatus {
  /**
   * KMS key ARN, identifier or alias
   */
  readonly KmsKeyId?: KmsKeyArn | KmsKeyId | KmsAliasName;
  /**
   * Last accessed date
   */
  readonly LastAccessedDate?: MillisecondsSinceEpoch;
  /**
   * Region where replication occurs
   */
  readonly Region: AwsRegion;
  /**
   * Replication status
   */
  readonly Status: SecretsManagerReplicationStatus;
  /**
   * Status message
   */
  readonly StatusMessage?: string;
}
