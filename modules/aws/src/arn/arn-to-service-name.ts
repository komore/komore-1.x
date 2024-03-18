import { stringToMatchesWith } from '@komore/string';

import { awsTypeError } from '../aws-type.error';
import { type Arn } from './arn';

/**
 * Creates a function that returns a service name, given an ARN
 *
 * @returns Function that returns a service name, given an ARN
 */
export function arnToServiceName(): (arn: Arn) => string {
  type Matches = readonly [matched: string, serviceName: string];
  const toMatches = stringToMatchesWith<Matches>(/^arn:aws:([^:]+):/);
  return arn => {
    const matches = toMatches(arn);
    if (matches === undefined) {
      throw awsTypeError.invalidArn({ arn });
    }

    const [, serviceName] = matches;
    return serviceName;
  };
}
