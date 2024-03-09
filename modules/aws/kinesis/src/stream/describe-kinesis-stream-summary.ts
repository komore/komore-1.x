import { type KinesisApiClient } from '../kinesis-api-client';
import { type DescribeKinesisStreamSummaryParameters } from './describe-kinesis-stream-summary-parameters';
import { type DescribeKinesisStreamSummaryResult } from './describe-kinesis-stream-summary-result';

/**
 * Creates a function that describes a Kinesis stream
 *
 * @param apiClient Kinesis API client
 * @returns Function that describes a Kinesis stream
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStreamSummary.html DescribeStreamSummary}
 */
export function describeKinesisStreamSummary(
  apiClient: KinesisApiClient
): (parameters: DescribeKinesisStreamSummaryParameters) => Observable<DescribeKinesisStreamSummaryResult> {
  return parameters =>
    apiClient({
      operation: 'Kinesis_20131202.DescribeStreamSummary',
      parameters,
    });
}
