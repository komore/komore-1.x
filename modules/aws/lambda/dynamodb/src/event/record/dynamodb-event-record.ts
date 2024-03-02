import { type AwsRegion } from '@komore/aws';
import { type LambdaEventIdentity } from '@komore/aws/lambda';

import { type DynamoDBEventName } from '../dynamodb-event-name';
import { type DynamoDBEventStreamRecord } from './dynamodb-event-stream-record';

/**
 * DynamoDB event record
 *
 * @see {@link http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_Record.html Record}
 */
export interface DynamoDBEventRecord {
  /**
   * AWS region
   */
  readonly awsRegion: AwsRegion;
  /**
   * DynamoDB event stream record
   */
  readonly dynamodb: DynamoDBEventStreamRecord;
  /**
   * Event identifier
   */
  readonly eventID: string; // TODO: typed
  /**
   * Event name
   */
  readonly eventName: DynamoDBEventName;
  /**
   * Event source
   */
  readonly eventSource: 'aws:dynamodb';
  /**
   * Event source ARN
   *
   * @undocumented
   */
  readonly eventSourceARN: string; // TODO: typed ARN + confirm it's present (undocumented)
  /**
   * Event version
   */
  readonly eventVersion: '1.0';
  /**
   * User identity for items deleted by the TTL process after expiration
   */
  readonly userIdentity?: LambdaEventIdentity<'dynamodb.amazonaws.com', 'Service'>;
}
