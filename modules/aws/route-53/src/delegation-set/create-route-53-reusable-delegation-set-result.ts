import { type UrlString } from '@komore/url';

import { type Route53DelegationSet } from './route-53-delegation-set';

/**
 * Create Route 53 reusable delegation set result
 *
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html#API_CreateReusableDelegationSet_ResponseElements CreateReusableDelegationSet Response Elements}
 */
export interface CreateRoute53ReusableDelegationSetResult {
  /**
   * Delegation set
   */
  readonly DelegationSet: Route53DelegationSet;
  /**
   * Unique URL representing the delegation set
   */
  readonly Location: UrlString;
}
