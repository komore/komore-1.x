import { type KinesisEventRecord } from './record/kinesis-event-record';

/**
 * Kinesis event
 */
export interface KinesisEvent {
  /**
   * List of records
   */
  readonly Records: ReadonlyArray<KinesisEventRecord>;
}
