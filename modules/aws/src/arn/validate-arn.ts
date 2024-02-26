import { awsTypeError } from '../aws-type.error';
import { type Arn } from './arn';
import { isArn } from './is-arn';

/**
 * Creates a function that validates that a string is an ARN
 *
 * @param serviceName Service name
 * @returns Function that validates that a string is an ARN
 */
export function validateArn<ServiceName extends string = string>(
  serviceName?: ServiceName
): (arn: string) => asserts arn is Arn<ServiceName> {
  const is = isArn(serviceName);
  return (arn): asserts arn is Arn<ServiceName> => {
    if (!is(arn)) {
      throw awsTypeError.invalidArn({ arn });
    }
  };
}
