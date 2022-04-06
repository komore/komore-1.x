import { appsync } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an AppSync function resource
 *
 * @param resourceId Resource identifier
 * @param config AppSync function configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function appSyncFunction<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, appsync.AppsyncFunctionConfig>
) {
  return resource(resourceId, typedResource('aws_appsync_function', appsync.AppsyncFunction), config);
}
