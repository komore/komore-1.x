import { type kinesisStreamModes } from './kinesis-stream-modes';

/**
 * Kinesis stream mode
 */
export type KinesisStreamMode = (typeof kinesisStreamModes)[number];
