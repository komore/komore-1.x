import { type S3EventRecordGlacierRestoreEventData } from './s3-event-record-glacier-restore-event-data';

/**
 * S3 event record Glacier event data
 */
export interface S3EventRecordGlacierEventData {
  /**
   * Restore event data
   */
  readonly restoreEventData: S3EventRecordGlacierRestoreEventData;
}
