import { type AuroraTransactionId } from './id/aurora-transaction-id';

/**
 * Begin Aurora transaction result
 *
 * @see {@link https://docs.aws.amazon.com/rdsdataservice/latest/APIReference/API_BeginTransaction.html#API_BeginTransaction_ResponseElements BeginTransaction Response Elements}
 */
export interface BeginAuroraTransactionResult {
  /**
   * Transaction identifier
   */
  readonly transactionId: AuroraTransactionId;
}
