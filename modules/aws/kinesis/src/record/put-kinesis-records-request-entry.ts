import { type Base64String } from '@komore/string';

/**
 * Put Kinesis records request entry
 *
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecordsRequestEntry.html PutRecordsRequestEntry}
 */
export interface PutKinesisRecordsRequestEntry {
  /**
   * Data
   */
  readonly Data: Base64String;
  /**
   * Explicit hash key
   */
  readonly ExplicitHashKey: string;
  /**
   * Partition key
   */
  readonly PartitionKey: string;
}
