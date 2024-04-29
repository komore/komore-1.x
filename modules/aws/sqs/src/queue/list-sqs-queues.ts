import { type SqsApiClient } from '../sqs-api-client';
import { type ListSqsQueuesParameters } from './list-sqs-queues-parameters';
import { type ListSqsQueuesResult } from './list-sqs-queues-result';

/**
 * Creates a function that lists SQS queues
 *
 * @param apiClient SQS API client
 * @returns Function that lists SQS queues
 */
export function listSqsQueues(
  apiClient: SqsApiClient
): (parameters: ListSqsQueuesParameters) => Observable<ListSqsQueuesResult> {
  const operation = 'ListQueues';
  return parameters => apiClient({ operation, parameters });
}
