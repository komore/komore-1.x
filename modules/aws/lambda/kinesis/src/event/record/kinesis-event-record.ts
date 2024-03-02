import { type AwsRegion } from '@komore/aws';
import { type IamRoleArn } from '@komore/aws/iam';
import { type KinesisStreamArn } from '@komore/aws/kinesis';

import { type kinesisEventSource } from '../kinesis-event-source';
import { type KinesisEventStreamRecord } from './kinesis-event-stream-record';

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
  readonly eventSourceARN: KinesisStreamArn;
  /**
   * Version
   */
  readonly eventVersion: '1.0';
  /**
   * Invoke identity ARN
   *
   * @note The invoked Lambda role
   */
  readonly invokeIdentityArn: IamRoleArn;
  /**
   * Kinesis event stream record
   */
  readonly kinesis: KinesisEventStreamRecord;
}
