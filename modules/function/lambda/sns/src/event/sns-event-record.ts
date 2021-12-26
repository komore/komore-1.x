import { type SnsEventRecordMessage } from './sns-event-record-message';

/**
 * SNS event record
 */
export interface SnsEventRecord {
  readonly EventVersion: '1.0';
  readonly EventSource: 'aws:sns';
  readonly EventSubscriptionArn: `arn:aws:sns:${string}`;
  readonly Sns: SnsEventRecordMessage;
}
