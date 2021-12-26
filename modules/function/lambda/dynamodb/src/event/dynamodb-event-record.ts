import { type LambdaEventIdentity } from '@komore/function-lambda';
import { type DynamoDBEventName } from './dynamodb-event-name';
import { type DynamoDBEventRecordMessage } from './dynamodb-event-record-message';

/**
 * DynamoDB event record
 * @see {@link http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_Record.html Record}
 */
export interface DynamoDBEventRecord {
  readonly awsRegion: string;
  readonly dynamodb: DynamoDBEventRecordMessage;
  readonly eventID: string;
  readonly eventName: DynamoDBEventName;
  readonly eventSource: 'aws:dynamodb';
  readonly eventSourceARN: string;
  readonly eventVersion: '1.0';
  readonly userIdentity?: LambdaEventIdentity<'dynamodb.amazonaws.com', 'Service'>;
}
