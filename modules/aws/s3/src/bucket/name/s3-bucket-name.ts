/**
 * S3 bucket name
 */
export type S3BucketName = string & {
  readonly __tag_awsS3BucketName: unique symbol;
};
