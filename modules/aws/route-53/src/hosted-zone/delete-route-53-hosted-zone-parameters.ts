import { type Route53HostedZoneId } from './id/route-53-hosted-zone-id';

/**
 * Delete Route 53 hosted zone parameters
 *
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHostedZone.html DeleteHostedZone}
 */
export interface DeleteRoute53HostedZoneParameters {
  /**
   * Hosted zone identifier
   */
  readonly Id: Route53HostedZoneId;
}
