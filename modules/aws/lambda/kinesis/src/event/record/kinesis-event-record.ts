import { type AwsRegion } from '@komore/aws';
import { type IamArn } from '@komore/aws/iam';
import { type KinesisArn } from '@komore/aws/kinesis';

import { type kinesisEventSource } from '../kinesis-event-source';
import { type KinesisEventRecordMessage } from './kinesis-event-record-message';

/**
 * Kinesis event record
 */
export interface KinesisEventRecord {
  /**
   * AWS region
   */
  readonly awsRegion: AwsRegion;
  /**
   * Event identifier
   */
  readonly eventID: string;
  /**
   * Event name
   */
  readonly eventName: 'aws:kinesis:record';
  /**
   * Event source
   */
  readonly eventSource: typeof kinesisEventSource;
  /**
   * Event source ARN
   */
  readonly eventSourceARN: KinesisArn;
  /**
   * Version
   */
  readonly eventVersion: '1.0';
  /**
   * Invoke identity ARN
   */
  readonly invokeIdentityArn: IamArn;
  /**
   * Kinesis message
   */
  readonly kinesis: KinesisEventRecordMessage;
}
