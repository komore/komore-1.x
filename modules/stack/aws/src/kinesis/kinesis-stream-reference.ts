import { kinesis } from '@cdktf/provider-aws';
import { dataSource, typedDataSource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Kinesis stream data source
 *
 * @param dataSourceId Data source identifier
 * @param config Kinesis stream data source configuration
 * @template ScopeType Scope type
 * @template DataSourceId Data source identifier
 */
export function kinesisStreamReference<ScopeType extends GenericScope, DataSourceId extends string>(
  dataSourceId: DataSourceId,
  config: ScopedConfiguration<ScopeType, kinesis.DataAwsKinesisStreamConfig>
) {
  return dataSource(dataSourceId, typedDataSource('aws_kinesis_stream', kinesis.DataAwsKinesisStream), config);
}
