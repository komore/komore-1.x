import { type S3EventRecordMessageBucket } from './s3-event-record-message-bucket';
import { type S3EventRecordMessageObject } from './s3-event-record-message-object';

/**
 * S3 event record message
 */
export interface S3EventRecordMessage {
  /**
   * Bucket information
   */
  readonly bucket: S3EventRecordMessageBucket;
  /**
   * Bucket notification configuration identifier
   */
  readonly configurationId: string; // TODO: typed?
  /**
   * Object information
   */
  readonly object: S3EventRecordMessageObject;
  /**
   * S3 schema version
   */
  readonly s3SchemaVersion: '1.0';
}
