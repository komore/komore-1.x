import { type S3BucketName } from '../bucket/name/s3-bucket-name';

/**
 * List S3 objects parameters
 *
 * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html#API_ListObjectsV2_RequestParameters ListObjectsV2 URI Request Parameters}
 */
export interface ListS3ObjectsParameters {
  /**
   * Bucket
   */
  readonly Bucket: S3BucketName;
}
