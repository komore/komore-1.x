import { type AwsRegion } from '@komore/aws';
import { type KmsAliasName, type KmsKeyArn, type KmsKeyId } from '@komore/aws/kms';

/**
 * Secrets Manager secret replica region
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_ReplicaRegionType.html ReplicaRegionType}
 */
export interface SecretsManagerSecretReplicaRegion {
  /**
   * KMS key ARN, identifier or alias
   *
   * @default aws/secretsmanager
   */
  readonly KmsKeyId?: KmsKeyArn | KmsKeyId | KmsAliasName | 'aws/secretsmanager';
  /**
   * Region where replication occurs
   */
  readonly Region: AwsRegion;
}
