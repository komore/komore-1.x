import { type S3BucketName } from '../bucket/name/s3-bucket-name';
import { type S3ObjectKey } from './key/s3-object-key';

/**
 * Copy S3 object parameters
 *
 * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html#API_CopyObject_RequestParameters CopyObject URI Request Parameters}
 */
export interface CopyS3ObjectParameters {
  /**
   * Destination bucket name
   */
  readonly Bucket: S3BucketName;
  /**
   * Destination object key
   */
  readonly Key: S3ObjectKey;
}
