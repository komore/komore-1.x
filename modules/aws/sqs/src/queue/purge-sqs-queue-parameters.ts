import { type SqsQueueUrlString } from './url/sqs-queue-url-string';

/**
 * Purge SQS queue parameters
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_PurgeQueue.html#API_PurgeQueue_RequestParameters PurgeQueue Request Parameters}
 */
export interface PurgeSqsQueueParameters {
  /**
   * Queue URL
   */
  readonly QueueUrl: SqsQueueUrlString;
}
