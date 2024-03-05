import { kinesisTypeError } from '../../kinesis-type.error';
import { type KinesisStreamName } from './kinesis-stream-name';
import { isKinesisStreamName } from './is-kinesis-stream-name';

/**
 * Validates that a string is a Kinesis stream name
 *
 * @param streamName Stream name string
 */
export function validateKinesisStreamName(streamName: string): asserts streamName is KinesisStreamName {
  if (!isKinesisStreamName(streamName)) {
    throw kinesisTypeError.invalidStreamName({ streamName });
  }
}
