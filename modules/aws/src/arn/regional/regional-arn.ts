import { type AwsAccountId } from '../../account/id/aws-account-id';
import { type AwsRegion } from '../../region/aws-region';
import { type Arn } from '../arn';

/**
 * Regional ARN
 *
 * @template ServiceName Service name
 * @template Value Value
 */
export type RegionalArn<ServiceName extends string = string, Value extends string = string> = Arn<
  ServiceName,
  `${AwsRegion}:${AwsAccountId}:${Value}`
>;
