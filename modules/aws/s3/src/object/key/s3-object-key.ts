/**
 * S3 object key
 */
export type S3ObjectKey = string & {
  readonly __tag_awsS3ObjectKey: unique symbol;
};
