import { type SqsApiClient } from '../sqs-api-client';
import { type GetSqsQueueUrlParameters } from './get-sqs-queue-url-parameters';
import { type GetSqsQueueUrlResult } from './get-sqs-queue-url-result';

/**
 * Creates a function that returns an SQS queue's URL
 *
 * @param apiClient SQS APi client
 * @returns Function that returns an SQS queue's URL
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueUrl.html GetQueueUrl}
 */
export function getSqsQueueUrl(
  apiClient: SqsApiClient
): (parameters: GetSqsQueueUrlParameters) => Observable<GetSqsQueueUrlResult> {
  const operation = 'GetQueueUrl';
  return parameters => apiClient({ operation, parameters });
}
