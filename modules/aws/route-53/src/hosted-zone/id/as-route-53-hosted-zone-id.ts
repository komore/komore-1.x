import { type Route53HostedZoneId } from './route-53-hosted-zone-id';
import { validateRoute53HostedZoneId } from './validate-route-53-hosted-zone-id';

/**
 * Safely casts as whether a string to a Route 53 hosted zone identifier
 *
 * @param hostedZoneId Hosted zone identifier string
 * @returns Route 53 hosted zone identifier
 */
export function asRoute53HostedZoneId(hostedZoneId: string): Route53HostedZoneId {
  validateRoute53HostedZoneId(hostedZoneId);
  return hostedZoneId;
}
