import { type S3ObjectRestoreCompletedEventRecord } from './glacier/s3-object-restore-completed-event-record';
import { type S3BaseEventRecord } from './s3-base-event-record';

/**
 * S3 event record
 *
 * @see {@link }
 */
export type S3EventRecord = S3BaseEventRecord | S3ObjectRestoreCompletedEventRecord;
