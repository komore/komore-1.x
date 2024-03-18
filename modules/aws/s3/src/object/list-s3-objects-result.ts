/**
 * List S3 objects result
 *
 * @see {@link https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html#API_ListObjectsV2_ResponseElements ListObjectsV2 Response Elements}
 */
export interface ListS3ObjectsResult {
  readonly CommonPrefixes: ReadonlyArray<unknown>;
}
