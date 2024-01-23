import { type CloudStorageBucketName } from './cloud-storage-bucket-name';

/**
 * Tests whether a string is a valid Cloud Storage bucket name
 *
 * @param bucketName Bucket name
 * @returns true if the string is a valid Cloud Storage bucket name
 */
export function isCloudStorageBucketName(bucketName: string): bucketName is CloudStorageBucketName {
  const { length } = bucketName;
  return 3 <= length && length <= 63;
}
