import { type AwsAccountId } from '../../account/id/aws-account-id';
import { type AwsRegion } from '../../region/aws-region';
import { type Arn } from '../arn';

/**
 * Regional ARN
 */
export type RegionalArn<ServiceName extends string, Value extends string> = Arn<
  ServiceName,
  `${AwsRegion}:${AwsAccountId}:${Value}`
>;
