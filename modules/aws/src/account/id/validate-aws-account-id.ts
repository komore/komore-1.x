import { awsTypeError } from '../../aws-type.error';
import { type AwsAccountId } from './aws-account-id';
import { isAwsAccountId } from './is-aws-account-id';

/**
 * Validates that an account identifier string is an AWS account identifier
 *
 * @param accountId Account identifier string
 */
export function validateAwsAccountId(accountId: string): asserts accountId is AwsAccountId {
  if (!isAwsAccountId(accountId)) {
    throw awsTypeError.invalidAccountId({ accountId });
  }
}
