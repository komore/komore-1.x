import { type KinesisBaseArn } from '../../arn/kinesis-base-arn';

/**
 * Kinesis stream ARN
 */
export type KinesisStreamArn = KinesisBaseArn<`stream/${string}`>;
