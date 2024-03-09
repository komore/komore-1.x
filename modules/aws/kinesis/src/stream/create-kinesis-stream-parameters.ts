import { type KinesisStreamModeDetails } from './mode/kinesis-stream-mode-details';
import { type KinesisStreamName } from './name/kinesis-stream-name';

/**
 * Create Kinesis stream parameters
 *
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_CreateStream.html#API_CreateStream_RequestParameters CreateStream Request Parameters}
 */
export interface CreateKinesisStreamParameters {
  /**
   * Number of shards
   */
  readonly ShardCount?: number;
  /**
   * Stream mode details
   */
  readonly StreamModeDetails: KinesisStreamModeDetails;
  /**
   * Stream name
   */
  readonly StreamName: KinesisStreamName;
}
