import { appsync } from '@cdktf/provider-aws';
import { addResource } from '@komore/stack/provider';

/**
 * Adds an AppSync data source
 * @param dataSourceId Data source identifier
 * @param config AppSync data source configuration
 * @returns Operator function that adds an AppSync data source
 * @template ResourceId Resource identifier
 */
export function appSyncDataSource<ResourceId extends string>(
  resourceId: ResourceId,
  config: appsync.AppsyncDatasourceConfig
) {
  return addResource(appsync.AppsyncDatasource, 'aws_appsync_datasource', resourceId, config);
}
