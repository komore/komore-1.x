import {
  type CopyObjectCommandOutput,
  type CreateBucketCommandOutput,
  type DeleteBucketCommandOutput,
  type DeleteObjectCommandOutput,
  type DeleteObjectsCommandOutput,
} from '@aws-sdk/client-s3';

import { createAwsEventType } from '@komore/aws';
import { eventProperties } from '@komore/event';

import { s3Domain } from './s3.domain';

/**
 * S3 event
 */
export const s3Event = createAwsEventType(s3Domain, {
  /**
   * An S3 bucket has been created
   *
   * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html CreateBucket}
   */
  bucketCreated: eventProperties<CreateBucketCommandOutput>(),
  /**
   * An S3 bucket has been deleted
   *
   * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html DeleteBucket}
   */
  bucketDeleted: eventProperties<DeleteBucketCommandOutput>(),
  /**
   * An S3 object has been copied
   *
   * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html CopyObject}
   */
  copyObject: eventProperties<CopyObjectCommandOutput>(),
  /**
   * An S3 object has been deleted
   *
   * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html DeleteObject}
   */
  objectDeleted: eventProperties<DeleteObjectCommandOutput>(),
  /**
   * A set of S3 objects have been deleted
   *
   * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjects.html DeleteObjects}
   */
  objectsDeleted: eventProperties<DeleteObjectsCommandOutput>(),
});
