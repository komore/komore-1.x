import { type IamPolicyArn } from './policy/iam-policy-arn';
import { type IamRoleArn } from './role/iam-role-arn';
import { type IamRootArn } from './root/iam-root-arn';
import { type IamUserArn } from './user/iam-user-arn';

/**
 * IAM ARN
 */
export type IamArn = IamPolicyArn | IamRoleArn | IamRootArn | IamUserArn;
