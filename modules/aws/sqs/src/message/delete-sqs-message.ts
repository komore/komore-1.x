import { type SqsApiClient } from '../sqs-api-client';
import { sqsTargetPrefix } from '../sqs-target-prefix';
import { type DeleteSqsMessageParameters } from './delete-sqs-message-parameters';

/**
 * Creates a function that deletes an SQS message
 *
 * @param apiClient SQS API client
 * @returns Function that deletes an SQS message
 * @see {@link https://docs.aws.amazon.com/AWSSimpleMessageService/latest/APIReference/API_DeleteMessage.html DeleteMessage}
 */
export function deleteSqsMessage(
  apiClient: SqsApiClient
): (parameters: DeleteSqsMessageParameters) => Observable<void> {
  return parameters =>
    apiClient({
      operation: `${sqsTargetPrefix}.DeleteMessage`,
      parameters,
    });
}
