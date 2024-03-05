import { type S3Owner } from '../owner/s3-owner';

/**
 * List S3 buckets result
 *
 * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html#API_ListBuckets_ResponseElements ListBuckets Response Elements}
 */
export interface ListS3BucketsResult {
  /**
   * List of buckets
   */
  readonly Buckets: ReadonlyArray<unknown>;
  /**
   * Owner of the listed buckets
   */
  readonly Owner: S3Owner;
}
