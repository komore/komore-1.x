import { type Route53HostedZone } from './route-53-hosted-zone';

/**
 * List Route 53 hosted zones result
 *
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZones.html#API_ListHostedZones_ResponseElements ListHostedZones Response Elements}
 */
export interface ListRoute53HostedZonesResult {
  /**
   * List of hosted zones
   */
  readonly HostedZones: ReadonlyArray<Route53HostedZone>;
}
