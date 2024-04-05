import { type Route53DelegationSetId } from '../delegation-set/id/route-53-delegation-set-id';
import { type ListRoute53HostedZonesMarker } from './list-route-53-hosted-zones-marker';

/**
 * List Route 53 hosted zones parameters
 *
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZones.html#API_ListHostedZones_RequestParameters ListHostedZones URI Request Parameters}
 */
export interface ListRoute53HostedZonesParameters {
  /**
   * Delegation set identifier
   */
  readonly delegationsetid?: Route53DelegationSetId;
  /**
   * Hosted zone type
   */
  readonly hostedzonetype?: 'PrivateHostedZone';
  /**
   * Marker from a previous ListHostedZones request
   */
  readonly marker?: ListRoute53HostedZonesMarker;
  /**
   * Maximum number of items to return
   */
  readonly maxitems?: number;
}
