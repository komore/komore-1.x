import { type AwsAccountId } from '@komore/aws';

import { type SqsQueueName } from './name/sqs-queue-name';

/**
 * Get SQS queue URL parameters
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueUrl.html#API_GetQueueUrl_RequestParameters GetQueueUrl Request Parameters}
 */
export interface GetSqsQueueUrlParameters {
  /**
   * Queue name
   */
  readonly QueueName: SqsQueueName;
  /**
   * Account that created the queue
   */
  readonly QueueOwnerAWSAccountId?: AwsAccountId;
}
