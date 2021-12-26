import { fromArray, type Observable } from '@komore/reactive';
import { type DynamoDBEvent } from './event/dynamodb-event';
import { type DynamoDBEventRecord } from './event/dynamodb-event-record';

/**
 * Returns an observable stream of DynamoDB event records
 * @param dynamoDBEvent DynamoDB event
 * @returns Observable stream of DynamoDB event records
 */
export function toDynamoDBRecords(dynamoDBEvent: DynamoDBEvent): Observable<DynamoDBEventRecord> {
  return fromArray(dynamoDBEvent.Records);
}
