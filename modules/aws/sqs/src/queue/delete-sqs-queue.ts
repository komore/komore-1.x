import { type SqsApiClient } from '../sqs-api-client';
import { type DeleteSqsQueueParameters } from './delete-sqs-queue-parameters';

/**
 * Creates a function that deletes an SQS queue
 *
 * @param apiClient SQS API client
 * @returns Function that deletes an SQS queue
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteQueue.html DeleteQueue}
 */
export function deleteSqsQueue(apiClient: SqsApiClient): (parameters: DeleteSqsQueueParameters) => Observable<void> {
  const operation = 'DeleteQueue';
  return parameters => apiClient({ operation, parameters });
}
