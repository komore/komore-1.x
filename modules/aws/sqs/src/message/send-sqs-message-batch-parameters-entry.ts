import { type ReadonlyRecord } from '@komore/typescript';

import { type SqsMessageAttributeValue } from './attribute/sqs-message-attribute-value';
import { type SqsMessageSystemAttributeValue } from './attribute/sqs-message-system-attribute-value';
import { type SqsMessageGroupId } from './group/sqs-message-group-id';

/**
 * Send SQS message batch parameters entry
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessageBatchRequestEntry.html SendMessageBatchRequestEntry}
 */
export interface SendSqsMessageBatchParametersEntry {
  /**
   * Number of seconds after which the message becomes available for processing
   */
  readonly DelaySeconds?: number;
  /**
   * Identifier within the batch
   */
  readonly Id: string; // TODO: typed?
  /**
   * Message attributes
   */
  readonly MessageAttributes: ReadonlyRecord<string, SqsMessageAttributeValue>;
  /**
   * Message body
   */
  readonly MessageBody: string;
  /**
   * Message de-duplication identifier
   */
  readonly MessageDeduplicationId?: string;
  /**
   * Message group identifier
   *
   * @note Only applicable for FIFO queues
   */
  readonly MessageGroupId?: SqsMessageGroupId;
  /**
   * System attributes
   */
  readonly MessageSystemAttributes?: Partial<ReadonlyRecord<'AWSTraceHeader', SqsMessageSystemAttributeValue>>;
}
