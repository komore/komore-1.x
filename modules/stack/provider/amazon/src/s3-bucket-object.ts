import { addResource } from '@komore/stack/provider';
import { S3BucketObject, type S3BucketObjectConfig } from './.gen/s3-bucket-object';

/**
 * Adds an S3 bucket object
 * @param resourceId Resource identifier
 * @param config S3 bucket object configuration
 * @returns Operator function that adds an S3 bucket object
 * @template ResourceId Resource identifier
 */
export function s3BucketObject<ResourceId extends string>(resourceId: ResourceId, config: S3BucketObjectConfig) {
  return addResource(S3BucketObject, 'aws_s3_bucket_object', resourceId, config);
}
