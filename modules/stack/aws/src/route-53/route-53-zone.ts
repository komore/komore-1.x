import { route53 } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Route 53 zone resource
 *
 * @param resourceId Resource identifier
 * @param config Route 53 zone configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function route53Zone<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, route53.Route53ZoneConfig>
) {
  return resource(resourceId, typedResource('aws_route53_zone', route53.Route53Zone), config);
}
