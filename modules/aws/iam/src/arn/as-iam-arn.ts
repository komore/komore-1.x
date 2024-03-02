import { type IamArn } from './iam-arn';
import { validateIamArn } from './validate-iam-arn';

/**
 * Safely casts a string to an IAM ARN
 *
 * @param value Value
 * @returns IAM ARN
 */
export function asIamArn(value: string): IamArn {
  validateIamArn(value);
  return value;
}
