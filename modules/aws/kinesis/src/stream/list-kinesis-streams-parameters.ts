import { type ListKinesisStreamsToken } from './list-kinesis-streams-token';
import { type KinesisStreamName } from './name/kinesis-stream-name';

/**
 * List Kinesis streams parameters
 *
 * @see {@link https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListStreams.html#API_ListStreams_RequestParameters ListStreams Request Parameters}
 */
export interface ListKinesisStreamsParameters {
  /**
   * Name of the stream to start the list with
   */
  readonly ExclusiveStartStreamName?: KinesisStreamName;
  /**
   * Maximum number of streams to list
   *
   * @note Defaults to `100`
   */
  readonly Limit?: number;
  /**
   * Next token used as a cursor
   */
  readonly NextToken?: ListKinesisStreamsToken;
}
