import { stringToMatchesWith } from '@komore/string';

import { type AwsAccountId } from '../../account/id/aws-account-id';
import { type RegionalArn } from './regional-arn';

/**
 * Creates a function that returns an AWS account identifier, given a regional ARN
 *
 * @returns Function that returns an AWS account identifier, given a regional ARN
 */
export function regionalArnToAwsAccountId(): (regionalArn: RegionalArn) => AwsAccountId {
  type Matches = readonly [matched: string, awsAccountId: AwsAccountId];
  const toMatches = stringToMatchesWith<Matches>(/^arn:aws:[^:]+:[^:]+:([^:]+):/);
  return regionalArn => {
    const matches = toMatches(regionalArn);
    if (matches === undefined) {
      throw 123; // todo
    }

    const [, awsAccountId] = matches;
    return awsAccountId;
  };
}
