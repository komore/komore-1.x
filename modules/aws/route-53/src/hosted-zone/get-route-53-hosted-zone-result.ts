import { asArray, type ArrayOrValue } from '@komore/collection';

import { type Route53DelegationSet } from '../delegation-set/route-53-delegation-set';
import { type Route53Vpc } from '../vpc/route-53-vpc';
import { type Route53HostedZone } from './route-53-hosted-zone';

/**
 * Get Route 53 hosted zone result
 *
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZone.html#API_GetHostedZone_ResponseElements GetHostedZone Response Elements}
 */
export interface GetRoute53HostedZoneResult {
  /**
   * Delegation set
   */
  readonly DelegationSet: Route53DelegationSet;
  /**
   * Hosted zone
   */
  readonly HostedZone: Route53HostedZone;
  /**
   * Whether deletion protection is enabled
   *
   * @note Undocumented
   */
  readonly HostedZoneDeletionProtectionEnabled: boolean;
  /**
   * List of VPCs associated with the hosted zone
   */
  readonly VPCs?: ReadonlyArray<Route53Vpc>;
}

/**
 * Get Route 53 hoste zone result XML
 *
 * @private
 */
type GetRoute53HostedZoneResultXml = Omit<GetRoute53HostedZoneResult, 'DelegationSet' | 'VPCs'> & {
  readonly DelegationSet: Omit<GetRoute53HostedZoneResult['DelegationSet'], 'NameServers'> & {
    readonly NameServers: {
      readonly NameServer: ReadonlyArray<string>;
    };
  };
  readonly VPCs?: ArrayOrValue<{
    readonly VPC: NonNullable<GetRoute53HostedZoneResult['VPCs']>[number];
  }>;
};

/**
 * Returns a get Route 53 hosted zone result, given an XML result
 *
 * @param xmlResult XML result
 * @returns Get Route 53 hosted zone result
 * @private
 */
export function getRoute53HostedZoneResultXml(xmlResult: GetRoute53HostedZoneResultXml): GetRoute53HostedZoneResult {
  const {
    DelegationSet: {
      NameServers: { NameServer: NameServers },
      ...remainingDelegationSetProperties
    },
    VPCs: xmlVPCs,
    ...remainingProperties
  } = xmlResult;
  const VPCs = xmlVPCs !== undefined ? asArray(xmlVPCs).map(({ VPC }) => VPC) : undefined;
  const DelegationSet = {
    NameServers,
    ...remainingDelegationSetProperties,
  };
  return {
    DelegationSet,
    ...(VPCs !== undefined ? { VPCs } : {}),
    ...remainingProperties,
  };
}
