import { type Route53HostedZoneId } from './route-53-hosted-zone-id';

/**
 * Tests whether a string a Route 53 hosted zone identifier
 *
 * @param hostedZoneId Hosted zone identifier string
 * @returns true if the string is a Route 53 hosted zone identifier
 */
export function isRoute53HostedZoneId(hostedZoneId: string): hostedZoneId is Route53HostedZoneId {
  return /^Z[A-Z0-9]{12,31}$/.test(hostedZoneId);
}
