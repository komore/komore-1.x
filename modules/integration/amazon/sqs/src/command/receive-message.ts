import type { ReceiveMessageCommandInput, ReceiveMessageCommandOutput, SQSClient } from '@aws-sdk/client-sqs';
import { ReceiveMessageCommand } from '@aws-sdk/client-sqs';
import { sendCommand } from '@komore/integration-amazon';
import type { Observable } from '@komore/reactive';

/**
 * Receives up to 10 messages
 * @param sqsClient SQS client
 * @param commandInput ReceiveMessage command input
 * @returns TODO
 * @note {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ReceiveMessage.html ReceiveMessage}
 */
export function receiveMessage(
  sqsClient: SQSClient,
  commandInput: ReceiveMessageCommandInput
): Observable<ReceiveMessageCommandOutput> {
  return sendCommand(sqsClient, new ReceiveMessageCommand(commandInput));
}
