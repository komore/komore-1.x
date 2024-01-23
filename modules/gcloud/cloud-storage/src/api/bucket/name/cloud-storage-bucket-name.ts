/**
 * Cloud Storage bucket name
 */
export type CloudStorageBucketName = string & {
  readonly __tag_cloudStorageBucketName: unique symbol;
};
