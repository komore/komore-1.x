import { kinesis } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a Kinesis stream resource
 *
 * @param resourceId Resource identifier
 * @param config Kinesis stream configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function route53Zone<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, kinesis.KinesisStreamConfig>
) {
  return resource(resourceId, typedResource('aws_kinesis_stream', kinesis.KinesisStream), config);
}
