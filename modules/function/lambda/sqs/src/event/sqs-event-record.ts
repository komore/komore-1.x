import { type ReadonlyRecord } from '@komore/typescript';
import { type SqsEventRecordAttributes } from './sqs-event-record-attributes';
import { type SqsEventRecordMessageAttribute } from './sqs-event-record-message-attribute';
import { type sqsEventType } from './sqs-event-type';

/**
 * SQS event record
 * @note {@link https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html Record example}
 */
export interface SqsEventRecord {
  readonly attributes: SqsEventRecordAttributes;
  readonly awsRegion: string;
  readonly body: string;
  readonly eventSource: typeof sqsEventType;
  readonly eventSourceARN: `aws:aws:sqs:${string}`;
  readonly messageId: string;
  readonly receiptHandle: string;
  readonly messageAttributes: ReadonlyRecord<string, SqsEventRecordMessageAttribute>;
  readonly md5OfBody: string;
}
