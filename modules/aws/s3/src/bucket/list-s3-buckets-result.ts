import { asArray, type ArrayOrValue } from '@komore/collection';

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

/**
 * List S3 buckets result XML
 *
 * @private
 */
type ListS3BucketsResultXml = Omit<ListS3BucketsResult, 'Buckets'> & {
  readonly Buckets: ArrayOrValue<{
    readonly Bucket: ListS3BucketsResult['Buckets'][number];
  }>;
};

/**
 * Returns a list S3 buckets result, given an XML result
 *
 * @param xmlResult XML result
 * @returns List S3 buckets result
 * @private
 */
export function listS3BucketsResultXml(xmlResult: ListS3BucketsResultXml): ListS3BucketsResult {
  const { Buckets: xmlBuckets, ...remainingProperties } = xmlResult;
  const Buckets = asArray(xmlBuckets).map(({ Bucket }) => Bucket);
  return {
    Buckets,
    ...remainingProperties,
  };
}
