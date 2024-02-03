import {
  ReceiveMessageCommand,
  type ReceiveMessageCommandInput,
  type ReceiveMessageCommandOutput,
  type SQSClient,
} from '@aws-sdk/client-sqs';

import { sendAwsCommand } from '@komore/aws';

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
  return sendAwsCommand(sqsClient, new ReceiveMessageCommand(commandInput));
}
