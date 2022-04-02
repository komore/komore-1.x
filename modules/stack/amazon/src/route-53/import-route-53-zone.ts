import { route53 } from '@cdktf/provider-aws';
import { dataSource, typedDataSource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Route 53 data source
 * @param dataSourceId Data source identifier
 * @param config Route 53 data source configuration
 */
export function importRoute53Zone<ScopeType extends GenericScope, DataSourceId extends string>(
  dataSourceId: DataSourceId,
  config: ScopedConfiguration<ScopeType, route53.DataAwsRoute53ZoneConfig>
) {
  return dataSource(dataSourceId, typedDataSource('aws_route53_zone', route53.DataAwsRoute53Zone), config);
}
