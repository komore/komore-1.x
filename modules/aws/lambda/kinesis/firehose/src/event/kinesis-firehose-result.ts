import { type KinesisFirehoseResultRecord } from './kinesis-firehose-result-record';

/**
 * Kinesis Firehose result
 */
export interface KinesisFirehoseResult {
  readonly records: ReadonlyArray<KinesisFirehoseResultRecord>;
}
