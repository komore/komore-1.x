import { type ReadonlyRecord } from '@komore/typescript';

import { type SqsQueueUrlString } from '../queue/url/sqs-queue-url-string';
import { type SqsMessageAttributeValue } from './attribute/sqs-message-attribute-value';
import { type SqsMessageSystemAttributeValue } from './attribute/sqs-message-system-attribute-value';
import { type SqsMessageGroupId } from './group/sqs-message-group-id';

/**
 * Send SQS message parameters
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html#API_SendMessage_RequestParameters SendMessage Request Parameters}
 */
export interface SendSqsMessageParameters {
  /**
   * Delay after which the message is available for processing
   */
  readonly DelaySeconds?: number;
  /**
   * Message attributes
   */
  readonly MessageAttributes?: ReadonlyRecord<string, SqsMessageAttributeValue>;
  /**
   * Message body
   */
  readonly MessageBody: string;
  /**
   * Message de-duplication identifier
   *
   * @note Only applies to FIFO queues
   */
  readonly MessageDeduplicationId?: string;
  /**
   * Message group identifier
   *
   * @note Only applies to FIFO queues
   */
  readonly MessageGroupId?: SqsMessageGroupId;
  /**
   * Message system attributes
   */
  readonly MessageSystemAttributes?: Partial<ReadonlyRecord<'AWSTraceHeader', SqsMessageSystemAttributeValue>>;
  /**
   * Queue URL
   */
  readonly QueueUrl: SqsQueueUrlString;
}
