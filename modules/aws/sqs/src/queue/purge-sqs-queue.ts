import { type SqsApiClient } from '../sqs-api-client';
import { type PurgeSqsQueueParameters } from './purge-sqs-queue-parameters';

/**
 * Creates a function that purges an SQS queue
 *
 * @param apiClient SQS API client
 * @returns Function that purges an SQS queue
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_PurgeQueue.html PurgeQueue}
 */
export function purgeSqsQueue(apiClient: SqsApiClient): (parameters: PurgeSqsQueueParameters) => Observable<void> {
  const operation = 'PurgeQueue';
  return parameters => apiClient({ operation, parameters });
}
