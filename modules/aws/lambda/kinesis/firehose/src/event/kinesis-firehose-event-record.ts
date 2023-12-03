import { type KinesisFirehoseEventRecordMetadata } from './kinesis-firehose-event-record-metadata';

/**
 * Kinesis Firehose event record
 */
export interface KinesisFirehoseEventRecord {
  readonly recordId: string;
  readonly approximateArrivalTimestamp: number;
  readonly data: string;
  readonly kinesisRecordMetadata?: KinesisFirehoseEventRecordMetadata;
}
