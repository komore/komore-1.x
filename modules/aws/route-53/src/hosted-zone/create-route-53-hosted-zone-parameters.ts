import { type Route53DelegationSetId } from '../delegation-set/id/route-53-delegation-set-id';
import { type Route53HostedZoneConfiguration } from './route-53-hosted-zone-configuration';

/**
 * Create Route 53 hosted zone parameters
 *
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html CreateHostedZone}
 */
export interface CreateRoute53HostedZoneParameters {
  /**
   * Unique string allowing idempotent requests
   */
  readonly CallerReference?: string;
  /**
   * Delegation set identifier
   */
  readonly DelegationSetId?: Route53DelegationSetId;
  /**
   * Hosted zone configuration
   */
  readonly HostedZoneConfig?: Route53HostedZoneConfiguration;
  /**
   * Fully qualified domain name
   *
   * @note The trailing dot is optional, as Route 53 assumes that the domain name is fully qualified
   */
  readonly Name: string;
  /**
   * Information about the VPC associated with the hosted zone
   *
   * @note Only available for private hosted zones
   */
  readonly VPC?: unknown; // TODO: type
}
