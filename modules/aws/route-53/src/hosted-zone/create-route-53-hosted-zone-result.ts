import { type UrlString } from '@komore/url';

import { type Route53DelegationSet } from '../delegation-set/route-53-delegation-set';
import { type Route53Vpc } from '../vpc/route-53-vpc';
import { type Route53HostedZoneChangeInformation } from './change/route-53-hosted-zone-change-information';
import { type Route53HostedZone } from './route-53-hosted-zone';

/**
 * Create Route 53 hosted zone result
 *
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html#API_CreateHostedZone_ResponseElements CreateHostedZone Response Elements}
 */
export interface CreateRoute53HostedZoneResult {
  /**
   * Information about the request
   */
  readonly ChangeInfo: Route53HostedZoneChangeInformation;
  /**
   * Delegation set information
   */
  readonly DelegationSet: Route53DelegationSet;
  /**
   * Hosted zone information
   */
  readonly HostedZone: Route53HostedZone;
  /**
   * Unique URL representing the hosted zone
   */
  readonly Location: UrlString;
  /**
   * VPC information
   */
  readonly VPC?: Route53Vpc;
}
