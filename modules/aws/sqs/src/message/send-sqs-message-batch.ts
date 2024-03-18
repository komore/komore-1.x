import { type SqsApiClient } from '../sqs-api-client';
import { sqsTargetPrefix } from '../sqs-target-prefix';
import { type SendSqsMessageBatchParameters } from './send-sqs-message-batch-parameters';
import { type SendSqsMessageBatchResult } from './send-sqs-message-batch-result';

/**
 * Creates a function that sends multiple SQS messages
 *
 * @param apiClient SQS API client
 * @returns Function that sends multiple SQS messages
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessageBatch.html SendMessageBatch}
 */
export function sendSqsMessageBatch(
  apiClient: SqsApiClient
): (parameters: SendSqsMessageBatchParameters) => Observable<SendSqsMessageBatchResult> {
  return parameters =>
    apiClient({
      operation: `${sqsTargetPrefix}.SendMessageBatch`,
      parameters,
    });
}
