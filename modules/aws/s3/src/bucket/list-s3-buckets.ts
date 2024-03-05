import { type S3ApiClient } from '../s3-api-client';
import { type ListS3BucketsResult } from './list-s3-buckets-result';

/**
 * Creates a function that lists S3 buckets
 *
 * @param apiClient S3 API client
 * @returns Function that lists S3 buckets
 * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html ListBuckets}
 * @permission s3:ListAllMyBuckets
 */
export function listS3Buckets(apiClient: S3ApiClient): () => Observable<ListS3BucketsResult> {
  return () => apiClient('ListAllMyBucketsResult', 'S3.ListBuckets');
}
