import { type Arn, type AwsAccountId, type AwsRegion } from '@komore/aws';

/**
 * Kinesis base ARN
 */
export type KinesisBaseArn<Value extends string> = Arn<'kinesis', `${AwsRegion}:${AwsAccountId}:${Value}`>;
