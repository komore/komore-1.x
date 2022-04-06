import { appsync } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an AppSync data source resource
 *
 * @param resourceId Resource identifier
 * @param config AppSync data source configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function appSyncDataSource<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, appsync.AppsyncDatasourceConfig>
) {
  return resource(resourceId, typedResource('aws_appsync_datasource', appsync.AppsyncDatasource), config);
}
