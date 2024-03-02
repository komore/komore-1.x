import { type KinesisBaseArn } from '../kinesis-base-arn';

/**
 * Kinesis stream ARN
 */
export type KinesisStreamArn = KinesisBaseArn<`stream/${string}`>;
