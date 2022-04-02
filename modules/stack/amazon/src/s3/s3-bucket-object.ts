import { s3 } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds an S3 bucket object resource
 *
 * @param resourceId Resource identifier
 * @param config S3 bucket object configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function s3BucketObject<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, s3.S3BucketObjectConfig>
) {
  return resource(resourceId, typedResource('aws_s3_bucket_object', s3.S3BucketObject), config);
}
