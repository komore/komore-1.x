import { s3Domain } from '@komore/aws/s3';
import { createEventType, eventProperties } from '@komore/event';

/**
 * S3 event
 */
export const s3Event = createEventType(s3Domain, {
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
  objectCopied: eventProperties<CopyObjectCommandOutput>(),
  /**
   * An S3 object has been deleted
   *
   * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html DeleteObject}
   */
  objectDeleted: eventProperties<DeleteObjectCommandOutput>(),
  /**
   * An S3 object has been put
   *
   * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html PutObject}
   */
  objectPut: eventProperties<PutObjectCommandOutput>(),
  /**
   * An archived copy of an S3 object has been restored
   *
   * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html RestoreObject}
   */
  objectRestored: eventProperties<RestoreObjectCommandOutput>(),
  /**
   * A set of S3 objects have been deleted
   *
   * @note {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjects.html DeleteObjects}
   */
  objectsDeleted: eventProperties<DeleteObjectsCommandOutput>(),
});
