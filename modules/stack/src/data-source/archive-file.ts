import { DataArchiveFile, type DataArchiveFileConfig } from '@cdktf/provider-archive';
import { dataSource, typedDataSource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an archive file data source
 *
 * @param dataSourceId Data source identifier
 * @param config Archive file data source configuration
 */
export function importArchiveFile<ScopeType extends GenericScope, DataSourceId extends string>(
  dataSourceId: DataSourceId,
  config: ScopedConfiguration<ScopeType, DataArchiveFileConfig>
) {
  return dataSource(dataSourceId, typedDataSource('aws_route53_zone', DataArchiveFile), config);
}
