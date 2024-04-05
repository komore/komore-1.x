import { type Route53HostedZoneChangeInformation } from './change/route-53-hosted-zone-change-information';

/**
 * Delete Route 53 hosted zone result
 *
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHostedZone.html#API_DeleteHostedZone_ResponseElements DeleteHostedZone Response Elements}
 */
export interface DeleteRoute53HostedZoneResult {
  /**
   * Information about the request
   */
  readonly ChangeInfo: Route53HostedZoneChangeInformation;
}
