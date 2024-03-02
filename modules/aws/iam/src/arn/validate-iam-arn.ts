import { iamTypeError } from '../iam-type.error';
import { type IamArn } from './iam-arn';
import { isIamArn } from './is-iam-arn';

/**
 * Validates that a string is an IAM ARN
 *
 * @param arn IAM ARN string
 */
export function validateIamArn(arn: string): asserts arn is IamArn {
  if (!isIamArn(arn)) {
    throw iamTypeError.invalidArn({ arn });
  }
}
