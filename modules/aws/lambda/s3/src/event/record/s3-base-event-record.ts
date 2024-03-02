import { type AwsRegion } from '@komore/aws';
import { type LambdaEventIdentity } from '@komore/aws/lambda';

import { type s3EventSource } from '../s3-event-source';
import { type S3EventRecordMessage } from './s3-event-record-message';
import { type S3EventRecordRequestParameters } from './s3-event-record-request-parameters';
import { type S3EventRecordResponseElements } from './s3-event-record-response-elements';
import { type S3EventName } from '../s3-event-name';

/**
 * S3 base event record
 *
 * @see {@link }
 */
export type S3BaseEventRecord = {
  /**
   * AWS region
   */
  readonly awsRegion: AwsRegion;
  /**
   * Event name
   */
  readonly eventName: S3EventName;
  /**
   * Event source
   */
  readonly eventSource: typeof s3EventSource;
  /**
   * Event time
   */
  readonly eventTime: string;
  /**
   * Event version
   */
  readonly eventVersion: '2.1' | '2.2' | '2.3';
  /**
   * User identifier
   */
  readonly userIdentity: LambdaEventIdentity;
  /**
   * Request parameters
   */
  readonly requestParameters: S3EventRecordRequestParameters;
  /**
   * Response elements
   */
  readonly responseElements: S3EventRecordResponseElements;
  /**
   * S3 event record message
   */
  readonly s3: S3EventRecordMessage;
};
