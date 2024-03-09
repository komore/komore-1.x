import { type KinesisStreamDescriptionSummary } from './kinesis-stream-description-summary';

/**
 * Describe Kinesis stream summary result
 *
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStreamSummary.html#API_DescribeStreamSummary_ResponseElements DescribeStreamSummary Response Elements}
 */
export interface DescribeKinesisStreamSummaryResult {
  /**
   * Stream description summary
   */
  readonly StreamDescriptionSummary: KinesisStreamDescriptionSummary;
}
