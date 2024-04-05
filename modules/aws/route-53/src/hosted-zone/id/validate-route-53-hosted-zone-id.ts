import { route53TypeError } from '../../route-53-type.error';
import { type Route53HostedZoneId } from './route-53-hosted-zone-id';
import { isRoute53HostedZoneId } from './is-route-53-hosted-zone-id';

/**
 * Validates that a string is a Route 53 hosted zone identifier
 *
 * @param hostedZoneId Table name string
 */
export function validateRoute53HostedZoneId(hostedZoneId: string): asserts hostedZoneId is Route53HostedZoneId {
  if (!isRoute53HostedZoneId(hostedZoneId)) {
    throw route53TypeError.invalidHostedZoneId({ hostedZoneId: hostedZoneId });
  }
}
