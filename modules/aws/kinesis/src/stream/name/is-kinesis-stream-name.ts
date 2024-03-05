import { type KinesisStreamName } from './kinesis-stream-name';

/**
 * Tests whether a string a Kinesis stream name
 *
 * @param streamName Stream name string
 * @returns true if the string is a Kinesis stream name
 */
export function isKinesisStreamName(streamName: string): streamName is KinesisStreamName {
  return /^[a-zA-Z0-9_\.-]{1,128}/.test(streamName);
}
