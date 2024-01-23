import { createErrorType, errorProperties } from '@komore/error';

import { cloudStorageDomain } from './cloud-storage.domain';

/**
 * Cloud Storage error
 */
export const cloudStorageError = createErrorType(cloudStorageDomain, {
  /**
   * The Cloud Storage bucket name is not valid
   */
  invalidBucketName: errorProperties<{
    /**
     * Bucket name
     */
    readonly bucketName: string;
  }>(),
});
