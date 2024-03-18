/**
 * S3 object version identifier
 */
export type S3ObjectVersionId = string & {
  readonly __tag_awsS3ObjectVersionId: unique symbol;
};
