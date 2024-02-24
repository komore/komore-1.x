import { type GetObjectCommand, type ListObjectsV2Command } from '@aws-sdk/client-s3';

import { awsQueryProperties, createAwsQueryType } from '@komore/aws';

import { s3Domain } from './s3.domain';

/**
 * S3 query
 */
export const s3Query = createAwsQueryType(s3Domain, {
  /**
   * Retrieves an object from an S3 bucket
   *
   * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html GetObject}
   */
  getObject: awsQueryProperties<GetObjectCommand>(),
  /**
   * Lists objects in an S3 bucket
   *
   * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html ListObjectsV2}
   */
  listObjects: awsQueryProperties<ListObjectsV2Command>(),
});
