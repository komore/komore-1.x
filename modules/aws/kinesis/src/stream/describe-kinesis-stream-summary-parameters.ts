import { type KinesisStreamArn } from './arn/kinesis-stream-arn';
import { type KinesisStreamName } from './name/kinesis-stream-name';

/**
 * Describe Kinesis stream summary parameters
 *
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_DescribeStreamSummary.html#API_DescribeStreamSummary_RequestParameters DescribeStreamSummary Request Parameters}
 */
export type DescribeKinesisStreamSummaryParameters =
  | {
      /**
       * Stream ARN
       */
      readonly StreamArn: KinesisStreamArn;
    }
  | {
      /**
       * Stream name
       */
      readonly StreamName: KinesisStreamName;
    };
