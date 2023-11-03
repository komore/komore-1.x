import { type ListQueuesCommand } from '@aws-sdk/client-sqs';

import { awsQueryProperties, createAwsQueryType } from '@komore/aws';

import { sqsDomain } from './sqs.domain';

/**
 * SQS query
 */
export const sqsQuery = createAwsQueryType(sqsDomain, {
  /**
   * Returns a list of queues in the current region
   *
   * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ListQueues.html ListQueues}
   */
  listQueues: awsQueryProperties<ListQueuesCommand>(),
});
