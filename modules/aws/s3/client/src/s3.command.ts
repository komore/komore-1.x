import {
  type CopyObjectCommandInput,
  type CreateBucketCommandInput,
  type DeleteBucketCommandInput,
  type DeleteObjectCommandInput,
  type DeleteObjectsCommandInput,
  type PutObjectCommandInput,
  type RestoreObjectCommandInput,
} from '@aws-sdk/client-s3';

import { createAwsCommandType } from '@komore/aws';
import { s3Domain } from '@komore/aws/s3';
import { commandProperties } from '@komore/command';

/**
 * S3 command
 */
export const s3Command = createAwsCommandType(s3Domain, {
  /**
   * Copies an S3 object
   *
   * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html CopyObject}
   */
  copyObject: commandProperties<CopyObjectCommandInput>(),
  /**
   * Creates an S3 bucket
   *
   * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html CreateBucket}
   */
  createBucket: commandProperties<CreateBucketCommandInput>(),
  /**
   * Deletes an S3 bucket
   *
   * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html DeleteBucket}
   */
  deleteBucket: commandProperties<DeleteBucketCommandInput>(),
  /**
   * Deletes an object from an S3 bucket
   *
   * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html DeleteObject}
   */
  deleteObject: commandProperties<DeleteObjectCommandInput>(),
  /**
   * Deletes objects from an S3 bucket
   *
   * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjects.html DeleteObjects}
   */
  deleteObjects: commandProperties<DeleteObjectsCommandInput>(),
  /**
   * Puts an object to an S3 bucket
   *
   * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html PutObject}
   */
  putObject: commandProperties<PutObjectCommandInput>(),
  /**
   * Restores an archived copy of an S3 object
   *
   * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_RestoreObject.html RestoreObject}
   */
  restoreObject: commandProperties<RestoreObjectCommandInput>(),
});
