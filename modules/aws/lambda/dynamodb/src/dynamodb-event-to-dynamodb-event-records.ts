import { fromArray } from '@komore/reactive';

import { type DynamoDBEvent } from './event/dynamodb-event';
import { type DynamoDBEventRecord } from './event/record/dynamodb-event-record';

/**
 * Returns an observable stream of DynamoDB event records, given a DynamoDB event
 *
 * @param dynamoDBEvent DynamoDB event
 * @returns Observable stream of DynamoDB event records
 */
export function dynamoDBEventToDynamoDBEventRecords(dynamoDBEvent: DynamoDBEvent): Observable<DynamoDBEventRecord> {
  return fromArray(dynamoDBEvent.Records);
}
