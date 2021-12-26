import { type LambdaEventIdentity } from '@komore/function-lambda';
import { type S3EventRecordGlacierEventData } from './s3-event-record-glacier-event-data';
import { type S3EventRecordMessage } from './s3-event-record-message';
import { type s3EventType } from './s3-event-type';

/**
 * S3 event record
 */
export interface S3EventRecord {
  readonly awsRegion: string;
  readonly eventVersion: string;
  readonly eventName: string;
  readonly eventSource: typeof s3EventType;
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
