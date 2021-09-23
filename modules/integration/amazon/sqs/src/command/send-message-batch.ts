import type { SendMessageBatchCommandInput, SendMessageBatchCommandOutput, SQSClient } from '@aws-sdk/client-sqs';
import { SendMessageBatchCommand } from '@aws-sdk/client-sqs';
import { sendCommand } from '@komore/integration-amazon';
import type { Observable } from '@komore/reactive';

/**
 * Sends a batch of messages
 * @param sqsClient SQS client
 * @param commandInput SendMessageBatch command input
 * @returns TODO
 * @note {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessageBatch.html SendMessageBatch}
 */
export function sendMessageBatch(
  sqsClient: SQSClient,
  commandInput: SendMessageBatchCommandInput
): Observable<SendMessageBatchCommandOutput> {
  return sendCommand(sqsClient, new SendMessageBatchCommand(commandInput));
}
