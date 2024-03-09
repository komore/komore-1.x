import { type KinesisStreamArn } from './arn/kinesis-stream-arn';
import { type KinesisStreamModeDetails } from './mode/kinesis-stream-mode-details';
import { type KinesisStreamName } from './name/kinesis-stream-name';
import { type KinesisStreamStatus } from './status/kinesis-stream-status';

/**
 * Kinesis stream summary
 *
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_StreamSummary.html StreamSummary}
 */
export interface KinesisStreamSummary {
  /**
   * Stream ARN
   */
  readonly StreamARN: KinesisStreamArn;
  /**
   * Stream creation timestamp
   */
  readonly StreamCreationTimestamp: number;
  /**
   * Stream capacity mode: on-demand or provisioned
   */
  readonly StreamModeDetails: KinesisStreamModeDetails;
  /**
   * Stream name
   */
  readonly StreamName: KinesisStreamName;
  /**
   * Steam status
   */
  readonly StreamStatus: KinesisStreamStatus;
}
