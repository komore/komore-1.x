import { asIamArn, type IamArn } from '@komore/aws/iam';
import { randomString } from '@komore/random';

/**
 * Generates a test IAM ARN
 *
 * @returns Test IAM ARN
 */
export function generateTestIamArn(): IamArn {
  // TODO: proper generation
  const value = randomString({ length: 42 })();
  return asIamArn(value);
}
