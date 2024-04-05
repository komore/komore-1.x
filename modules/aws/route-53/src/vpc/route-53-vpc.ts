import { type AwsRegion } from '@komore/aws';

import { type Route53VpcId } from './id/route-53-vpc-id';

/**
 * Route 53 VPC
 *
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_VPC.html VPC}
 */
export interface Route53Vpc {
  /**
   * VPC identifier
   */
  readonly VPCId: Route53VpcId;
  /**
   * VPC region, for private hosted zones
   */
  readonly VPCRegion?: AwsRegion;
}
