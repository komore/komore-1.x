import { type Md5String } from '@komore/string';

import { type SqsMessageId } from './id/sqs-message-id';

/**
 * Send SQS message batch result entry
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessageBatchResultEntry.html SendMessageBatchResultEntry}
 */
export interface SendSqsMessageBatchResultEntry {
  /**
   * Message identifier within the batch
   */
  readonly Id: string; // TODO: typed?
  /**
   * MD5 of the message attributes
   */
  readonly MD5OfMessageAttributes: Md5String;
  /**
   * MD5 of the message body
   */
  readonly MD5OfMessageBody: Md5String;
  /**
   * MD5 of the system attributes
   */
  readonly MD5OfMessageSystemAttributes: Md5String;
  /**
   * Message identifier
   */
  readonly MessageId: SqsMessageId;
  /**
   * Sequence number
   *
   * @note Only applicable to FIFO queues
   */
  readonly SequenceNumber?: string;
}
