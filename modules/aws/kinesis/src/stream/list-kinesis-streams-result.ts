import { type KinesisStreamSummary } from './kinesis-stream-summary';
import { type ListKinesisStreamsToken } from './list-kinesis-streams-token';
import { type KinesisStreamName } from './name/kinesis-stream-name';

/**
 * List Kinesis streams result
 *
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListStreams.html#API_ListStreams_ResponseElements ListStreams Response Elements}
 */
export interface ListKinesisStreamsResult {
  /**
   * Whether there are more streams to list
   */
  readonly HasMoreStreams: boolean;
  /**
   * Next token if more streams are available
   */
  readonly NextToken?: ListKinesisStreamsToken;
  /**
   * List of stream names
   */
  readonly StreamNames: ReadonlyArray<KinesisStreamName>;
  /**
   * List of stream summaries
   */
  readonly StreamSummaries: ReadonlyArray<KinesisStreamSummary>;
}
