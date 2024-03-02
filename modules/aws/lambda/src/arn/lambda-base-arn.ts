import { type Arn, type AwsAccountId, type AwsRegion } from '@komore/aws';

/**
 * Lambda base ARN
 */
export type LambdaBaseArn<Value extends string> = Arn<'lambda', `${AwsRegion}:${AwsAccountId}:${Value}`>;
