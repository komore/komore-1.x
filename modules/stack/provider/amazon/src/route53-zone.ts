import { addResource } from '@komore/stack/provider';
import { Route53Zone, type Route53ZoneConfig } from './.gen/route53-zone';

/**
 * Adds a Route53 zone
 * @param resourceId Resource identifier
 * @param config Route53 zone configuration
 * @returns Operator function that adds a Route53 zone
 * @template ResourceId Resource identifier
 */
export function route53Zone<ResourceId extends string>(resourceId: ResourceId, config: Route53ZoneConfig) {
  return addResource(Route53Zone, 'aws_route53_zone', resourceId, config);
}
