import { type SecretsManagerSecretArn, type SecretsManagerSecretName } from '@komore/aws/secrets-manager';

import { type AuroraClusterArn } from '../cluster/arn/aurora-cluster-arn';
import { type AuroraTransactionId } from './id/aurora-transaction-id';

/**
 * Rollback Aurora transaction parameters
 *
 * @see {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_RollbackTransaction.html#API_RollbackTransaction_RequestBody RollbackTransaction Request Body}
 */
export interface RollbackAuroraTransactionParameters {
  /**
   * ARN of the Aurora cluster
   */
  readonly resourceArn: AuroraClusterArn;
  /**
   * Name or ARN of the secret that enables access to the cluster
   */
  readonly secretArn: SecretsManagerSecretArn | SecretsManagerSecretName;
  /**
   * Identifier of the transaction to roll back
   */
  readonly transactionId: AuroraTransactionId;
}
