import { type CloudStorageBucketName } from './cloud-storage-bucket-name';
import { validateCloudStorageBucketName } from './validate-cloud-storage-bucket-name';

/**
 * Casts a string to a Cloud Storage bucket name
 *
 * @param bucketName Bucket name string
 * @returns Cloud Storage bucket name
 */
export function asCloudStorageBucketName(bucketName: string): CloudStorageBucketName {
  validateCloudStorageBucketName(bucketName);
  return bucketName;
}
