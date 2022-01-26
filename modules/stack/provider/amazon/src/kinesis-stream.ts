import { kinesis } from '@cdktf/provider-aws';
import { addResource } from '@komore/stack/provider';

/**
 * Adds a Kinesis stream reference
 * @param resourceId Data source identifier
 * @param config Kinesis stream data source configuration
 * @returns Operator function that adds a Kinesis stream reference
 * @template ResourceId Resource identifier
 */
export function kinesisStream<ResourceId extends string>(resourceId: ResourceId, config: kinesis.KinesisStreamConfig) {
  return addResource(kinesis.KinesisStream, 'aws_kinesis_stream', resourceId, config);
}
