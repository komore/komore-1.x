import { type RegionalArn } from '@komore/aws';

/**
 * Kinesis base ARN
 */
export type KinesisBaseArn<Value extends string> = RegionalArn<'kinesis', Value>;
