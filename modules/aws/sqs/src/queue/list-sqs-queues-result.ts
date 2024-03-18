import { type ListSqsQueuesToken } from './lists-sqs-queues-token';
import { type SqsQueueUrlString } from './url/sqs-queue-url-string';

/**
 * List SQS queues result
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListQueues.html#API_ListQueues_ResponseElements ListQueues Result Elements}
 */
export interface ListSqsQueuesResult {
  /**
   * Next token for pagination
   */
  readonly NextToken: ListSqsQueuesToken | null;
  /**
   * List of queue URLs
   */
  readonly QueueUrls: ReadonlyArray<SqsQueueUrlString>;
}
