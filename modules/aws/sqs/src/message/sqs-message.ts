import { type Md5String } from '@komore/cryptography';
import { type ReadonlyRecord } from '@komore/typescript';

import { type SqsMessageAttributeValue } from './attribute/sqs-message-attribute-value';
import { type SqsMessageId } from './id/sqs-message-id';
import { type SqsMessageReceiptHandle } from './receipt/sqs-message-receipt-handle';

/**
 * SQS message
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_Message.html Message}
 */
export interface SqsMessage {
  /**
   * Body
   */
  readonly Body: string;
  /**
   * MD5 of the body
   */
  readonly MD5OfBody: Md5String;
  /**
   * MD5 of the message attributes
   */
  readonly MD5OfMessageAttributes: Md5String;
  /**
   * Message attributes
   */
  readonly MessageAttributes: ReadonlyRecord<string, SqsMessageAttributeValue>;
  /**
   * Message identifier
   */
  readonly MessageId: SqsMessageId;
  /**
   * Receipt handle
   */
  readonly ReceiptHandle: SqsMessageReceiptHandle;
}
