import { appsync } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an AppSync resolver resource
 *
 * @param resourceId Resource identifier
 * @param config AppSync resolver configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function appSyncResolver<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, appsync.AppsyncResolverConfig>
) {
  return resource(resourceId, typedResource('aws_appsync_resolver', appsync.AppsyncResolver), config);
}
