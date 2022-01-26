import { appsync } from '@cdktf/provider-aws';
import { type GenericScope } from '@komore/stack';
import { addResource } from '@komore/stack/provider';

/**
 * Adds an AppSync data source
 * @param dataSourceId Data source identifier
 * @param config AppSync data source configuration
 * @returns Scope hat adds an AppSync data source
 * @template ResourceId Resource identifier
 */
export function addAppSyncDataSource<ScopeType extends GenericScope, ResourceId extends string>(
  scope: ScopeType,
  resourceId: ResourceId,
  config: appsync.AppsyncDatasourceConfig
) {
  return addResource(appsync.AppsyncDatasource, 'aws_appsync_datasource', resourceId, config);
}
