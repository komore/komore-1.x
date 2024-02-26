import { type Arn } from './arn';

/**
 * Creates a function that tests whether a string is a valid ARN
 *
 * @param serviceName Service name
 * @returns Function that tests whether a string is a valid ARN
 */
export function isArn<ServiceName extends string = string>(
  serviceName?: ServiceName
): (arn: string) => arn is Arn<ServiceName> {
  const prefix = serviceName !== undefined ? `arn:aws:${serviceName}:` : `arn:aws:`;
  return (arn): arn is Arn<ServiceName> => arn.startsWith(prefix);
}
