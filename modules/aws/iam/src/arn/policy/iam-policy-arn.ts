import { type IamBaseArn } from '../iam-base-arn';

/**
 * IAM policy ARN
 */
export type IamPolicyArn = IamBaseArn<`policy/${string}`>;
