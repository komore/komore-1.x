import { isArn } from '@komore/aws';

import { type IamArn } from './iam-arn';

/**
 * Tests whether a string is an IAM ARN
 *
 * @param arn IAM ARN string
 * @returns true if the string is an IAM ARN
 */
export function isIamArn(arn: string): arn is IamArn {
  return isArn('iam')(arn);
}
