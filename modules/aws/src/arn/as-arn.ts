import { type Arn } from './arn';
import { validateArn } from './validate-arn';

/**
 * Creates a function that safely casts a string to an ARN
 *
 * @param serviceName Service name
 * @returns Function that tests whether a string is a valid ARN
 */
export function asArn<ServiceName extends string = string>(
  serviceName?: ServiceName
): (arn: string) => Arn<ServiceName> {
  const validate: (arn: string) => asserts arn is Arn<ServiceName> = validateArn(serviceName);
  return arn => {
    validate(arn);
    return arn;
  };
}
