import { route53 } from '@cdktf/provider-aws';
import { addResource } from '@komore/stack/provider';

/**
 * Adds a Route53 zone
 * @param resourceId Resource identifier
 * @param config Route53 zone configuration
 * @returns Operator function that adds a Route53 zone
 * @template ResourceId Resource identifier
 */
export function route53Zone<ResourceId extends string>(resourceId: ResourceId, config: route53.Route53ZoneConfig) {
  return addResource(route53.Route53Zone, 'aws_route53_zone', resourceId, config);
}
