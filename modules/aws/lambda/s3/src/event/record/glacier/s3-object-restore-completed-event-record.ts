import { type S3EventName } from '../../s3-event-name';
import { type S3BaseEventRecord } from '../s3-base-event-record';
import { type S3EventRecordGlacierEventData } from './s3-event-record-glacier-event-data';

/**
 * S3 event record for the `s3:ObjectRestore:Completed` event
 */
export interface S3ObjectRestoreCompletedEventRecord extends S3BaseEventRecord {
  /**
   * Event name
   */
  readonly eventName: Extract<S3EventName, 's3:ObjectRestore:Completed'>;
  /**
   * Glacier event data
   */
  readonly glacierEventData?: S3EventRecordGlacierEventData;
}
