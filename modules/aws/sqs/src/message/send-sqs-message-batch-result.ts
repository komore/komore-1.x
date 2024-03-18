import { type SendSqsMessageBatchResultEntry } from './send-sqs-message-batch-result-entry';
import { type SendSqsMessageBatchResultErrorEntry } from './send-sqs-message-batch-result-error-entry';

/**
 * Send SQS message batch result
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessageBatch.html#API_SendMessageBatch_ResponseElements SendMessageBatch Response Elements}
 */
export interface SendSqsMessageBatchResult {
  /**
   * List of failed items
   */
  readonly Failed: ReadonlyArray<SendSqsMessageBatchResultErrorEntry>;
  /**
   * List of items
   */
  readonly Successful: ReadonlyArray<SendSqsMessageBatchResultEntry>;
}
