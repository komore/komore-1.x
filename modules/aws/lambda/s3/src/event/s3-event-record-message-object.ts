/**
 * S3 event record message object
 */
export interface S3EventRecordMessageObject {
  readonly eTag: string;
  readonly key: string;
  readonly sequencer: string;
  readonly size: number;
  readonly versionId?: string;
}
