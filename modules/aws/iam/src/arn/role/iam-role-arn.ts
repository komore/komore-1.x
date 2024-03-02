import { type IamBaseArn } from '../iam-base-arn';

/**
 * IAM role ARN
 */
export type IamRoleArn = IamBaseArn<`role/${string}`>;
