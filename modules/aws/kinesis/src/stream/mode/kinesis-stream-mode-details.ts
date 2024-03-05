import { type KinesisStreamMode } from './kinesis-stream-mode';

/**
 * Kinesis stream mode details
 *
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_StreamModeDetails.html StreamModeDetails}
 */
export interface KinesisStreamModeDetails {
  /**
   * Stream mode
   */
  readonly StreamMode: KinesisStreamMode;
}
