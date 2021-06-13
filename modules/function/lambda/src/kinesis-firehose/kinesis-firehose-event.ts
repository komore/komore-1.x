import type { KinesisFirehoseEventRecord } from './kinesis-firehose-event-record';

/**
 * Kinesis Firehose event
 */
export interface KinesisFirehoseEvent {
  readonly deliveryStreamArn: 'aws:lambda:events';
  readonly invocationId: string;
  readonly region: string;
  readonly records: ReadonlyArray<KinesisFirehoseEventRecord>;
}
