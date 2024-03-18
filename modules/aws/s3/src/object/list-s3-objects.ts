import { type S3ApiClient } from '../s3-api-client';
import { type ListS3ObjectsParameters } from './list-s3-objects-parameters';
import { type ListS3ObjectsResult } from './list-s3-objects-result';

/**
 * Creates a function that lists S3 objects
 *
 * @param apiClient S3 API client
 * @returns Function that lists S3 objects
 * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html ListObjectsV2}
 */
export function listS3Objects(
  apiClient: S3ApiClient
): (parameters: ListS3ObjectsParameters) => Observable<ListS3ObjectsResult> {
  return parameters => apiClient('');
}
