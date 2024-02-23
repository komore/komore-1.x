import { type AuroraClusterArn } from '../cluster/arn/aurora-cluster-arn';

export interface RollbackAuroraTransactionParameters {
  /**
   * ARN of the Aurora cluster
   */
  readonly resourceArn: AuroraClusterArn;
  /**
   * Name or ARN of the secret that enables access to the cluster
   */
  readonly secretArn: string | SecretArn;
  /**
   * Identifier of the transaction to roll back
   */
  readonly transactionId: AuroraTransactionId;
}
