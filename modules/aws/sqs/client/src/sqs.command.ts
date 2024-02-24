import {
  type PurgeQueueCommandInput,
  type SendMessageBatchCommandInput,
  type SendMessageCommandInput,
} from '@aws-sdk/client-sqs';

import { createAwsCommandType } from '@komore/aws';
import { sqsDomain } from '@komore/aws/sqs';
import { commandProperties } from '@komore/command';

/**
 * SQS command
 */
export const sqsCommand = createAwsCommandType(sqsDomain, {
  /**
   * Deletes all available messages from a queue
   *
   * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_PurgeQueue.html PurgeQueue}
   */
  purgeQueue: commandProperties<PurgeQueueCommandInput>(),
  /**
   * Delivers a message to the specified queue
   *
   * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html SendMessage}
   */
  sendMessage: commandProperties<SendMessageCommandInput>(),
  /**
   * Delivers up to 10 messages to the specified queue
   *
   * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessageBatch.html SendMessageBatch}
   */
  sendMessageBatch: commandProperties<SendMessageBatchCommandInput>(),
});
