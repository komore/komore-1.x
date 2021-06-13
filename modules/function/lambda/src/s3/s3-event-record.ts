import type { LambdaEventIdentity } from '../lambda-event-identity';
import type { S3EventRecordGlacierEventData } from './s3-event-record-glacier-event-data';
import type { S3EventRecordMessage } from './s3-event-record-message';

/**
 * S3 event record
 */
export interface S3EventRecord {
  readonly awsRegion: string;
  readonly eventVersion: string;
  readonly eventName: string;
  readonly eventSource: 'aws:s3';
  readonly eventTime: string;
  readonly glacierEventData?: S3EventRecordGlacierEventData;
  readonly userIdentity: LambdaEventIdentity;
  readonly requestParameters: {
    readonly sourceIPAddress: string;
  };
  readonly responseElements: {
    'x-amz-request-id': string;
    'x-amz-id-2': string;
  };
  readonly s3: S3EventRecordMessage;
}
