import {
  s3Domain,
  type GetS3ObjectResult,
  type GetS3ObjectParameters,
  type ListS3ObjectsParameters,
  type ListS3ObjectsResult,
} from '@komore/aws/s3';
import { createQueryType, queryProperties } from '@komore/query';

/**
 * S3 query
 */
export const s3Query = createQueryType(s3Domain, {
  /**
   * Retrieves an object from an S3 bucket
   *
   * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html GetObject}
   */
  getObject: queryProperties<GetS3ObjectResult, GetS3ObjectParameters>(),
  /**
   * Lists objects in an S3 bucket
   *
   * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html ListObjectsV2}
   */
  listObjects: queryProperties<ListS3ObjectsResult, ListS3ObjectsParameters>(),
});
