import { s3 } from '@cdktf/provider-aws';
import { addResource } from '@komore/stack/provider';

/**
 * Adds an S3 bucket
 * @param resourceId Resource identifier
 * @param config S3 bucket configuration
 * @returns Operator function that adds an S3 bucket
 * @template ResourceId Resource identifier
 */
export function s3Bucket<ResourceId extends string>(resourceId: ResourceId, config: s3.S3BucketConfig) {
  return addResource(s3.S3Bucket, 'aws_s3_bucket', resourceId, config);
}
