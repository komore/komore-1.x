import { type SqsQueueUrlString } from './url/sqs-queue-url-string';

/**
 * Delete SQS queue parameters
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteQueue.html#API_DeleteQueue_RequestParameters DeleteQueue Request Parameters}
 */
export interface DeleteSqsQueueParameters {
  /**
   * Queue URL
   */
  readonly QueueUrl: SqsQueueUrlString;
}
