import { type SqsQueueUrlString } from '../queue/url/sqs-queue-url-string';
import { type SendSqsMessageBatchParametersEntry } from './send-sqs-message-batch-parameters-entry';

/**
 * Send SQS message batch parameters
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessageBatch.html#API_SendMessageBatch_RequestParameters SendMessageBatch Request Parameters}
 */
export interface SendSqsMessageBatchParameters {
  /**
   * Entries
   */
  readonly Entries: ReadonlyArray<SendSqsMessageBatchParametersEntry>;
  /**
   * Queue URL
   */
  readonly QueueUrl: SqsQueueUrlString;
}
