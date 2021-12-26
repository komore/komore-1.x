import { type GenericScope } from '@komore/stack';
import { addResource } from '@komore/stack/provider';
import { AppsyncDatasource, type AppsyncDatasourceConfig } from './.gen/appsync-datasource';

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
  config: AppsyncDatasourceConfig
) {
  return addResource(AppsyncDatasource, 'aws_appsync_datasource', resourceId, config);
}
