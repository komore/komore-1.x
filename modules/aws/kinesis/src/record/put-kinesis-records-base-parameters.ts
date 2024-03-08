import { type PutKinesisRecordsRequestEntry } from './put-kinesis-records-request-entry';

/**
 * Put Kinesis records base parameters
 *
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecords.html#API_PutRecords_RequestParameters PutRecords Request Parameters}
 */
export interface PutKinesisRecordsBaseParameters {
  /**
   * Records
   */
  readonly Records: ReadonlyArray<PutKinesisRecordsRequestEntry>;
}
