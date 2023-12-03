import { type KinesisEventRecordMessage } from './kinesis-event-record-message';

/**
 * Kinesis event record
 */
export interface KinesisEventRecord {
  readonly awsRegion: string;
  readonly eventID: string;
  readonly eventName: 'aws:kinesis:record';
  readonly eventSource: 'aws:kinesis';
  readonly eventSourceARN: `arn:aws:kinesis:${string}`;
  readonly eventVersion: '1.0';
  readonly invokeIdentityArn: `arn:aws:iam:${string}`;
  readonly kinesis: KinesisEventRecordMessage;
}
