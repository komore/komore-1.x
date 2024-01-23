import { type cloudStorageSignedUrlActions } from './cloud-storage-siged-url-actions';

/**
 * Cloud Storage signed URL action
 */
export type CloudStorageSignedUrlAction = (typeof cloudStorageSignedUrlActions)[number];
