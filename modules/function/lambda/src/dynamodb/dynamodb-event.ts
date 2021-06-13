import type { DynamoDBEventRecord } from './dynamodb-event-record';

/**
 * DynamoDB event
 */
export interface DynamoDBEvent {
  readonly Records: ReadonlyArray<DynamoDBEventRecord>;
}
