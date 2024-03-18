import { type SqsApiClient } from '../sqs-api-client';
import { sqsTargetPrefix } from '../sqs-target-prefix';
import { type ReceiveSqsMessageParameters } from './receive-sqs-message-parameters';
import { type ReceiveSqsMessageResult } from './receive-sqs-message-result';

/**
 * Creates a function that receives SQS messages
 *
 * @param apiClient SQS API client
 * @returns Function that receives SQS messages
 * @note {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ReceiveMessage.html ReceiveMessage}
 */
export function receiveSqsMessage(
  apiClient: SqsApiClient
): (parameters: ReceiveSqsMessageParameters) => Observable<ReceiveSqsMessageResult> {
  return parameters =>
    apiClient({
      operation: `${sqsTargetPrefix}.ReceiveMessage`,
      parameters,
    });
}
