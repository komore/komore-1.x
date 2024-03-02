import { type IamBaseArn } from '../iam-base-arn';

/**
 * IAM user ARN
 */
export type IamUserArn = IamBaseArn<`user/${string}`>;
