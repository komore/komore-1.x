import { type SqsQueueUrlString } from '../queue/url/sqs-queue-url-string';
import { type SqsMessageReceiptHandle } from './receipt/sqs-message-receipt-handle';

/**
 * Delete SQS message parameters
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessage.html#API_DeleteMessage_RequestParameters DeleteMessage Request Parameters}
 */
export interface DeleteSqsMessageParameters {
  /**
   * Queue URL
   */
  readonly QueueUrl: SqsQueueUrlString;
  /**
   * Receipt handler
   */
  readonly ReceiptHandle: SqsMessageReceiptHandle;
}
