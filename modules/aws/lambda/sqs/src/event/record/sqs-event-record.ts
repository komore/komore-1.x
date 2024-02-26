import { type AwsRegion } from '@komore/aws';
import { type SqsArn, type SqsMessageId } from '@komore/aws/sqs';
import { type ReadonlyRecord } from '@komore/typescript';

import { type sqsEventSource } from '../sqs-event-source';
import { type SqsEventRecordAttributes } from './sqs-event-record-attributes';
import { type SqsEventRecordMessageAttribute } from './sqs-event-record-message-attribute';

/**
 * SQS event record
 *
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html Record example}
 */
export interface SqsEventRecord {
  /**
   * Attributes
   */
  readonly attributes: SqsEventRecordAttributes;
  /**
   * AWS region
   */
  readonly awsRegion: AwsRegion;
  /**
   * Body
   */
  readonly body: string;
  /**
   * Event source
   */
  readonly eventSource: typeof sqsEventSource;
  /**
   * Event source ARN
   */
  readonly eventSourceARN: SqsArn;
  /**
   * SQS message identifier
   */
  readonly messageId: SqsMessageId;
  /**
   * Receipt handler
   */
  readonly receiptHandle: string;
  /**
   * Message attributes
   */
  readonly messageAttributes: ReadonlyRecord<string, SqsEventRecordMessageAttribute>;
  /**
   * MD5 hash of the body
   */
  readonly md5OfBody: string;
}
