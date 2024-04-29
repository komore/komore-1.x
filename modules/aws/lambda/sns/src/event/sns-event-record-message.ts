import { type ReadonlyRecord } from '@komore/typescript';

import { type SnsEventRecordMessageAttribute } from './sns-event-record-message-attribute';

/**
 * SNS event record message
 */
export interface SnsEventRecordMessage {
  readonly Message: string;
  readonly MessageAttributes: ReadonlyRecord<string, SnsEventRecordMessageAttribute>;
  readonly MessageId: string;
  readonly Signature: string;
  readonly SignatureVersion: '1';
  readonly SigningCertUrl: string;
  readonly Subject: string;
  readonly Timestamp: string;
  readonly TopicArn: `arn:aws:sns:${string}`;
  readonly Type: 'Notification';
  readonly UnsubscribeUrl: string;
}
