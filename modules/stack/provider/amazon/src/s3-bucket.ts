import { addResource } from '@komore/stack/provider';
import { S3Bucket, type S3BucketConfig } from './.gen/s3-bucket';

/**
 * Adds an S3 bucket
 * @param resourceId Resource identifier
 * @param config S3 bucket configuration
 * @returns Operator function that adds an S3 bucket
 * @template ResourceId Resource identifier
 */
export function s3Bucket<ResourceId extends string>(resourceId: ResourceId, config: S3BucketConfig) {
  return addResource(S3Bucket, 'aws_s3_bucket', resourceId, config);
}
