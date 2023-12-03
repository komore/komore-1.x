import { type S3EventRecordMessageBucket } from './s3-event-record-message-bucket';
import { type S3EventRecordMessageObject } from './s3-event-record-message-object';

/**
 * S3 event record message
 */
export interface S3EventRecordMessage {
  readonly bucket: S3EventRecordMessageBucket;
  readonly configurationId: string;
  readonly object: S3EventRecordMessageObject;
  readonly s3SchemaVersion: string;
}
