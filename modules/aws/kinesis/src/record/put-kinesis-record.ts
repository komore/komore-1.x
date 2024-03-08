import { type KinesisApiClient } from '../kinesis-api-client';
import { type PutKinesisRecordParameters } from './put-kinesis-record-parameters';
import { type PutKinesisRecordResult } from './put-kinesis-record-result';

/**
 * Creates a function that writes a data record into a Kinesis stream
 *
 * @param apiClient Kinesis API client
 * @returns Function that writes a data record into a Kinesis stream
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecord.html PutRecord}
 */
export function putKinesisRecord(
  apiClient: KinesisApiClient
): (parameters: PutKinesisRecordParameters) => Observable<PutKinesisRecordResult> {
  return parameters =>
    apiClient({
      operation: 'Kinesis_20131202.PutRecord',
      parameters,
    });
}
