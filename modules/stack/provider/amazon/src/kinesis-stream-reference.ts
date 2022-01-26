import { kinesis } from '@cdktf/provider-aws';
import { addDataSource } from '@komore/stack/provider';

/**
 * Adds a Kinesis stream reference
 * @param dataSourceId Data source identifier
 * @param config Kinesis stream reference configuration
 * @returns Operator function that adds a Kinesis stream reference
 * @template DataSourceId Data source identifier
 */
export function kinesisStreamReference<DataSourceId extends string>(
  dataSourceId: DataSourceId,
  config: kinesis.DataAwsKinesisStreamConfig
) {
  return addDataSource(kinesis.DataAwsKinesisStream, 'aws_kinesis_stream', dataSourceId, config);
}
