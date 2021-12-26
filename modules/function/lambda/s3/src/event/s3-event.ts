import { type S3EventRecord } from './s3-event-record';

/**
 * S3 event
 */
export interface S3Event {
  readonly Records: ReadonlyArray<S3EventRecord>;
}
