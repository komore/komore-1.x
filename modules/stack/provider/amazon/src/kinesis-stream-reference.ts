import { addDataSource } from '@komore/stack/provider';
import { DataAwsKinesisStream, type DataAwsKinesisStreamConfig } from './.gen/data-aws-kinesis-stream';

/**
 * Adds a Kinesis stream reference
 * @param dataSourceId Data source identifier
 * @param config Kinesis stream reference configuration
 * @returns Operator function that adds a Kinesis stream reference
 * @template DataSourceId Data source identifier
 */
export function kinesisStreamReference<DataSourceId extends string>(
  dataSourceId: DataSourceId,
  config: DataAwsKinesisStreamConfig
) {
  return addDataSource(DataAwsKinesisStream, 'aws_kinesis_stream', dataSourceId, config);
}
