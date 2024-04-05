import { type Route53HostedZoneId } from './id/route-53-hosted-zone-id';

/**
 * Get Route 53 hosted zone parameters
 *
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZone.html#API_GetHostedZone_RequestParameters GetHostedZone URI Request Parameters}
 */
export interface GetRoute53HostedZoneParameters {
  /**
   * Hosted zone identifier
   */
  readonly Id: Route53HostedZoneId;
}
