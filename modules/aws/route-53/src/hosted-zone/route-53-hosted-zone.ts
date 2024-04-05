import { type Route53LinkedService } from '../linked-service/route-53-linked-service';
import { type Route53HostedZoneId } from './id/route-53-hosted-zone-id';
import { type Route53HostedZoneConfiguration } from './route-53-hosted-zone-configuration';

/**
 * Route 53 hosted zone
 *
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_HostedZone.html HostedZone}
 */
export interface Route53HostedZone {
  /**
   * Caller reference
   */
  readonly CallerReference: string;
  /**
   * Hosted zone configuration
   */
  readonly Config?: Route53HostedZoneConfiguration;
  /**
   * Hosted zone identifier
   */
  readonly Id: Route53HostedZoneId;
  /**
   * Linked service, if the zone was created by another service
   */
  readonly LinkedService?: Route53LinkedService;
  /**
   * Hosted zone name
   */
  readonly Name: string;
  /**
   * Number of record sets in the hosted zone
   */
  readonly ResourceRecordSetCount: number;
}
