import { cloudStorageError } from '../../../cloud-storage.error';
import { type CloudStorageBucketName } from './cloud-storage-bucket-name';
import { isCloudStorageBucketName } from './is-cloud-storage-bucket-name';

/**
 * Validates that a string is a valid Cloud Storage bucket name
 *
 * @param bucketName Bucket name
 */
export function validateCloudStorageBucketName(bucketName: string): asserts bucketName is CloudStorageBucketName {
  if (!isCloudStorageBucketName(bucketName)) {
    throw cloudStorageError.invalidBucketName({ bucketName });
  }
}
