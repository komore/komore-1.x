import { type KinesisApiClient } from '../kinesis-api-client';
import { type ListKinesisStreamsParameters } from './list-kinesis-streams-parameters';
import { type ListKinesisStreamsResult } from './list-kinesis-streams-result';

/**
 * Creates a function that lists Kinesis streams
 *
 * @param apiClient Kinesis API client
 * @returns Function that lists Kinesis streams
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListStreams.html ListStreams}
 */
export function listKinesisStreams(
  apiClient: KinesisApiClient
): (parameters: ListKinesisStreamsParameters) => Observable<ListKinesisStreamsResult> {
  return parameters => apiClient({ operation: 'Kinesis_20131202.ListStreams', parameters });
}
