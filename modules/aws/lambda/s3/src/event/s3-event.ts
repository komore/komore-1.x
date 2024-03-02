import { type S3EventRecord } from './record/s3-event-record';

/**
 * S3 event
 */
export interface S3Event {
  /**
   * List of records
   */
  readonly Records: ReadonlyArray<S3EventRecord>;
}
