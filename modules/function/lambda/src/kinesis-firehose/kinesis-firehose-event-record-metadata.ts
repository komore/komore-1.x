/**
 * Kinesis Firehose event record metadata
 */
export interface KinesisFirehoseEventRecordMetadata {
  readonly approximateArrivalTimestamp: number;
  readonly partitionKey: string;
  readonly sequenceNumber: string;
  readonly shardId: string;
  readonly subsequenceNumber: string;
}
