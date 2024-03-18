import { type S3BucketName } from '../bucket/name/s3-bucket-name';
import { type S3ObjectKey } from './key/s3-object-key';
import { type S3ObjectVersionId } from './version/id/s3-object-version-id';

/**
 * Get S3 object parameters
 *
 * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html#API_GetObject_RequestParameters GetObject Request Parameters}
 */
export interface GetS3ObjectParameters {
  /**
   * Bucket name
   */
  readonly Bucket: S3BucketName;
  // TODO: If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since
  /**
   * Key
   */
  readonly Key: S3ObjectKey;
  // TODO: partNumber, Range
  // TODO: response-cache-control
  // TODO: response-content-disposition, response-content-encoding, response-content-language, response-content-type
  // TODO: response-expires
  /**
   * Version identifier
   */
  readonly VersionId?: S3ObjectVersionId;
  // TODO: x-amz-checksum-mode
  // TODO: x-amz-expected-bucket-owner, x-amz-request-payer
}
