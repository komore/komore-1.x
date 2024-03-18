import { type Md5String } from '@komore/string';

import { type SqsMessageId } from './id/sqs-message-id';

/**
 * Send SQS message result
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html#API_SendMessage_ResponseElements SendMessage Response Elements}
 */
export interface SendSqsMessageResult {
  /**
   * MD5 of the message attributes
   */
  readonly MD5OfMessageAttributes: Md5String;
  /**
   * MD5 of the message body
   */
  readonly MD5OfMessageBody: Md5String;
  /**
   * Md5 of the system attributes
   */
  readonly MD5OfMessageSystemAttributes: Md5String;
  /**
   * Message identifier
   */
  readonly MessageId: SqsMessageId;
  /**
   * Sequence number
   *
   * @note Only applies to FIFO queues
   */
  readonly SequenceNumber?: string;
}
