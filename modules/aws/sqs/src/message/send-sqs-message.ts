import { type SqsApiClient } from '../sqs-api-client';
import { type SendSqsMessageParameters } from './send-sqs-message-parameters';
import { type SendSqsMessageResult } from './send-sqs-message-result';

/**
 * Creates a function that sends an SQS message
 *
 * @param apiClient SQS API client
 * @returns Function that sends an SQS message
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html SendMessage}
 */
export function sendSqsMessage(
  apiClient: SqsApiClient
): (parameters: SendSqsMessageParameters) => Observable<SendSqsMessageResult> {
  const operation = 'SendMessage';
  return parameters => apiClient({ operation, parameters });
}
