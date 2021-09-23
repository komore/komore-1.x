import type { SendMessageCommandInput, SendMessageCommandOutput, SQSClient } from '@aws-sdk/client-sqs';
import { SendMessageCommand } from '@aws-sdk/client-sqs';
import { sendCommand } from '@komore/integration-amazon';
import type { Observable } from '@komore/reactive';

/**
 * Sends a message
 * @param sqsClient SQS client
 * @param commandInput SendMessage command input
 * @returns TODO
 * @note {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html SendMessage}
 */
export function sendMessage(
  sqsClient: SQSClient,
  commandInput: SendMessageCommandInput
): Observable<SendMessageCommandOutput> {
  return sendCommand(sqsClient, new SendMessageCommand(commandInput));
}
