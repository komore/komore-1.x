import { addResource } from '@komore/stack/provider';
import { AppsyncDatasource, type AppsyncDatasourceConfig } from './.gen/appsync-datasource';

/**
 * Adds an AppSync data source
 * @param dataSourceId Data source identifier
 * @param config AppSync data source configuration
 * @returns Operator function that adds an AppSync data source
 * @template ResourceId Resource identifier
 */
export function appSyncDataSource<ResourceId extends string>(resourceId: ResourceId, config: AppsyncDatasourceConfig) {
  return addResource(AppsyncDatasource, 'aws_appsync_datasource', resourceId, config);
}
