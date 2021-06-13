/**
 * Kinesis event record message
 */
export interface KinesisEventRecordMessage {
  readonly approximateArrivalTimestamp: number;
  readonly data: string;
  readonly kinesisSchemaVersion: '1.0';
  readonly partitionKey: string;
  readonly sequenceNumber: string;
}
