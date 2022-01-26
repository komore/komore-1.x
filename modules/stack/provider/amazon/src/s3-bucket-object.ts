import { s3 } from '@cdktf/provider-aws';
import { addResource } from '@komore/stack/provider';

/**
 * Adds an S3 bucket object
 * @param resourceId Resource identifier
 * @param config S3 bucket object configuration
 * @returns Operator function that adds an S3 bucket object
 * @template ResourceId Resource identifier
 */
export function s3BucketObject<ResourceId extends string>(resourceId: ResourceId, config: s3.S3BucketObjectConfig) {
  return addResource(s3.S3BucketObject, 'aws_s3_bucket_object', resourceId, config);
}
