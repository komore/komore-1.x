import type { KinesisFirehoseEventRecordTransformationResult } from './kinesis-firehose-event-record-transformation-result';

/**
 * Kinesis Firehose result record
 */
export interface KinesisFirehoseResultRecord {
  readonly data: string;
  readonly recordId: string;
  readonly result: KinesisFirehoseEventRecordTransformationResult;
}
