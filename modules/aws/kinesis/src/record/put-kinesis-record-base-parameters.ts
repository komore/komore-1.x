import { type Base64String } from '@komore/string';

/**
 * Put Kinesis record base parameters
 *
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecord.html#API_PutRecord_RequestParameters PutRecord Request Parameters}
 */
export interface PutKinesisRecordBaseParameters {
  /**
   * Data
   */
  readonly Data: Base64String;
  /**
   * Explicit hash key
   */
  readonly ExplicitHashKey?: string;
  /**
   * Partition key
   */
  readonly PartitionKey: string;
  /**
   * Sequence number for ordering
   */
  readonly SequenceNumberForOrdering?: string;
}
