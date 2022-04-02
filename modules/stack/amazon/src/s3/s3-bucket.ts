import { s3 } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an S3 bucket resource
 *
 * @param resourceId Resource identifier
 * @param config S3 bucket configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function s3Bucket<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, s3.S3BucketConfig>
) {
  return resource(resourceId, typedResource('aws_s3_bucket', s3.S3Bucket), config);
}
