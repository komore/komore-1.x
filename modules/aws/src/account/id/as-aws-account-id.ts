import { type AwsAccountId } from './aws-account-id';
import { validateAwsAccountId } from './validate-aws-account-id';

/**
 * Safely casts a string to an AWS account identifier
 *
 * @param accountId Account identifier string
 * @returns AWS account identifier
 */
export function asAwsAccountId(accountId: string): AwsAccountId {
  validateAwsAccountId(accountId);
  return accountId;
}
