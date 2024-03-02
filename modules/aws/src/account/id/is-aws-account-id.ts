import { type AwsAccountId } from './aws-account-id';

/**
 * Tests whether an account identifier string is a valid AWS account identifier
 *
 * @param accountId Account identifier string
 * @returns true if the string is a valid AWS account identifier
 */
export function isAwsAccountId(accountId: string): accountId is AwsAccountId {
  return accountId.length > 0;
}
