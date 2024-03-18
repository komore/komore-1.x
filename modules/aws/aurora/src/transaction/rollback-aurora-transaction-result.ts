/**
 * Rollback Aurora transaction result
 *
 * @see {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_RollbackTransaction.html#API_RollbackTransaction_ResponseElements RollbackTransaction Response Elements}
 */
export interface RollbackAuroraTransactionResult {
  /**
   * Transaction status
   */
  readonly transactionStatus: string; // TODO: typed
}
