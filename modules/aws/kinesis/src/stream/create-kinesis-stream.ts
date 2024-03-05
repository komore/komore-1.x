import { type KinesisApiClient } from '../kinesis-api-client';
import { type CreateKinesisStreamParameters } from './create-kinesis-stream-parameters';

/**
 * Creates a function that creates a Kinesis stream
 *
 * @param apiClient Kinesis API client
 * @returns Function that creates a Kinesis stream
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_CreateStream.html CreateStream}
 */
export function createKinesisStream(
  apiClient: KinesisApiClient
): (parameters: CreateKinesisStreamParameters) => Observable<void> {
  return parameters => apiClient({ operation: 'Kinesis_20131202.CreateStream', parameters });
}
