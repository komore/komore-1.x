import { type KinesisApiClient } from '../kinesis-api-client';
import { type PutKinesisRecordsParameters } from './put-kinesis-records-parameters';
import { type PutKinesisRecordsResult } from './put-kinesis-records-result';

/**
 * Creates a function that writes data records into a Kinesis stream
 *
 * @param apiClient Kinesis API client
 * @returns Function that writes data records into a Kinesis stream
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecords.html PutRecords}
 */
export function putKinesisRecord(
  apiClient: KinesisApiClient
): (parameters: PutKinesisRecordsParameters) => Observable<PutKinesisRecordsResult> {
  return parameters =>
    apiClient({
      operation: 'Kinesis_20131202.PutRecord',
      parameters,
    });
}
