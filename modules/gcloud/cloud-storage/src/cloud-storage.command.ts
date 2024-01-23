import { commandProperties, createCommandType } from '@komore/command';
import { type Temporal } from '@komore/temporal';
import { type ReadonlyRecord } from '@komore/typescript';

import { type CloudStorageBucketName } from './api/bucket/name/cloud-storage-bucket-name';
import { type CloudStorageSignedUrlAction } from './api/signed-url/cloud-storage-siged-url-action';
import { cloudStorageDomain } from './cloud-storage.domain';

/**
 * Cloud Storage command
 */
export const cloudStorageCommand = createCommandType(cloudStorageDomain, {
  /**
   * Creates a pre-signed URL
   */
  createPreSignedUrl: commandProperties<{
    /**
     * Signed URL action
     */
    readonly action: CloudStorageSignedUrlAction;
    /**
     * Bucket name
     */
    readonly bucketName: CloudStorageBucketName;
    /**
     * Expiration time
     */
    readonly expirationTime: Temporal.Instant;
    /**
     * Object path
     */
    readonly objectPath: string;
    /**
     * Query parameters
     */
    readonly queryParameters?: ReadonlyRecord<string, string>;
  }>(),
});
