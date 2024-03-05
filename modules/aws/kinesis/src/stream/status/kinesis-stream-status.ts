import { type kinesisStreamStatuses } from './kinesis-stream-statuses';

/**
 * Kinesis stream status
 */
export type KinesisStreamStatus = (typeof kinesisStreamStatuses)[number];
