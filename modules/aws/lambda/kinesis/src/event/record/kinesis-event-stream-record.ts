/**
 * Kinesis event stream record
 */
export interface KinesisEventStreamRecord {
  /**
   * Approximate date and time when the stream record was created, in UNIX epoch time
   */
  readonly approximateArrivalTimestamp: number;
  /**
   *
   */
  readonly data: string;
  /**
   * Kinesis schema version
   */
  readonly kinesisSchemaVersion: '1.0';
  /**
   * Partition key
   */
  readonly partitionKey: string;
  /**
   * Sequence number
   */
  readonly sequenceNumber: string;
}

// TODO: check if encryptionType is present
