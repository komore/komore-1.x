import { type Route53HostedZoneId } from '../hosted-zone/id/route-53-hosted-zone-id';

/**
 * Create Route 53 reusable delegation set parameters
 *
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html CreateReusableDelegationSet}
 */
export interface CreateRoute53ReusableDelegationSetParameters {
  /**
   * Caller reference
   */
  readonly CallerReference: string;
  /**
   * Hosted zone identifier
   */
  readonly HostedZoneId?: Route53HostedZoneId;
}
