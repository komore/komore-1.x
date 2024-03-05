import { type KinesisStreamName } from './kinesis-stream-name';
import { validateKinesisStreamName } from './validate-kinesis-stream-name';

/**
 * Safely casts as whether a string to a Kinesis stream name
 *
 * @param streamName Stream name string
 * @returns Kinesis stream name
 */
export function asKinesisStreamName(streamName: string): KinesisStreamName {
  validateKinesisStreamName(streamName);
  return streamName;
}
