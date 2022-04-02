import { route53 } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Route 53 record resource
 * @param resourceId Resource identifier
 * @param config Route 53 record configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function route53Record<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, route53.Route53RecordConfig>
) {
  return resource(resourceId, typedResource('aws_route53_record', route53.Route53Record), config);
}
