import { type Arn, type AwsAccountId } from '@komore/aws';

/**
 * IAM base ARN
 */
export type IamBaseArn<Value extends string> = Arn<'iam', `:${AwsAccountId}:${Value}`>;
