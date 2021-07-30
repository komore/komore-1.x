/**
 * S3 event record Glacier restore event data
 */
export interface S3EventRecordGlacierRestoreEventData {
  readonly lifecycleRestorationExpiryTime: string;
  readonly lifecycleRestoreStorageClass: string;
}
