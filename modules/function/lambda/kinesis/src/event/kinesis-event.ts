import type { KinesisEventRecord } from './kinesis-event-record';

/**
 * Kinesis event
 */
export interface KinesisEvent {
  readonly Records: ReadonlyArray<KinesisEventRecord>;
}
