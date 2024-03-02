import { type DateTimeString } from '@komore/temporal';

/**
 * S3 event record Glacier restore event data
 */
export interface S3EventRecordGlacierRestoreEventData {
  /**
   * Restore expiry time
   */
  readonly lifecycleRestorationExpiryTime: DateTimeString;
  /**
   * Storage class
   */
  readonly lifecycleRestoreStorageClass: string; // TODO: typed
}
