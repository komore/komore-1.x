/**
 * Commit Aurora transaction result
 *
 * @see {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_CommitTransaction.html#API_CommitTransaction_ResponseElements CommitTransaction Response Elements}
 */
export interface CommitAuroraTransactionResult {
  /**
   * Transaction status
   */
  readonly transactionStatus: string; // TODO: typed
}
