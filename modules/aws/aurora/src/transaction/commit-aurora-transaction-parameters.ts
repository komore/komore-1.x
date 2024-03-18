import { type SecretsManagerSecretArn, type SecretsManagerSecretName } from '@komore/aws/secrets-manager';

import { type AuroraClusterArn } from '../cluster/arn/aurora-cluster-arn';
import { type AuroraTransactionId } from './id/aurora-transaction-id';

/**
 * Commit Aurora transaction parameters
 *
 * @see {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_CommitTransaction.html#API_CommitTransaction_RequestBody CommitTransaction Request Body}
 */
export interface CommitAuroraTransactionParameters {
  /**
   * Cluster ARN
   */
  readonly resourceArn: AuroraClusterArn;
  /**
   * Secret ARN or name
   */
  readonly secretArn: SecretsManagerSecretArn | SecretsManagerSecretName;
  /**
   * Transaction identifier
   */
  readonly transactionId: AuroraTransactionId;
}
