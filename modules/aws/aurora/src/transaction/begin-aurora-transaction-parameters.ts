import { type SecretsManagerSecretArn, type SecretsManagerSecretName } from '@komore/aws/secrets-manager';

import { type AuroraClusterArn } from '../cluster/arn/aurora-cluster-arn';
import { type AuroraDatabaseName } from '../database/name/aurora-database-name';

/**
 * Begin Aurora transaction parameters
 *
 * @see {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BeginTransaction.html#API_BeginTransaction_RequestBody BeginTransaction Request Body}
 */
export interface BeginAuroraTransactionParameters {
  /**
   * Database name
   */
  readonly database: AuroraDatabaseName;
  /**
   * Cluster ARN
   */
  readonly resourceArn: AuroraClusterArn;
  /**
   * Secret ARN or name
   */
  readonly secretArn: SecretsManagerSecretArn | SecretsManagerSecretName;
}
