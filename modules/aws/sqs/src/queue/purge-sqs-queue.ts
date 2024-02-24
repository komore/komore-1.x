import { type SqsApiClient } from '../sqs-api-client';

/**
 * Creates a function that purges an SQS queue
 *
 * @param apiClient SQS API client
 * @returns Function that purges an SQS queue
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_PurgeQueue.html PurgeQueue}
 */
export function purgeSqsQueue(
  apiClient: SqsApiClient
): (parameters: PurgeSqsQueueParameters) => Observable<PurgeSqsQueueResult> {
  const targetHeader = createAwsTargetHttpHeader('AmazonSQS.PurgeQueue');
}
