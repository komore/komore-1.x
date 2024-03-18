import { type SqsQueueUrlString } from './url/sqs-queue-url-string';

/**
 * Get SQS queue URL result
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueUrl.html#API_GetQueueUrl_ResponseElements GetQueueUrl Response Elements}
 */
export interface GetSqsQueueUrlResult {
  /**
   * Queue URL
   */
  readonly QueueUrl: SqsQueueUrlString;
}
