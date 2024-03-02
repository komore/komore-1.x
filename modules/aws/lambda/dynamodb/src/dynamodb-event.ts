import { createLambdaTrigger, type LambdaTrigger } from '@komore/aws/lambda';

import { type DynamoDBEventTriggerOptions } from './dynamodb-event-trigger-options';
import { type DynamoDBEvent } from './event/dynamodb-event';
import { isDynamoDBEvent } from './event/is-dynamodb-event';
import { type DynamoDBEventRecord } from './event/record/dynamodb-event-record';
import { type DynamoDBEventResponse } from './event/response/dynamodb-event-response';

/**
 * Creates a DynamoDB event trigger
 *
 * @param triggerOptions DynamoDB event trigger options
 * @returns DynamoDB event trigger
 */
export function dynamoDBEvent<Batched extends boolean = false>(
  triggerOptions?: DynamoDBEventTriggerOptions<Batched>
): LambdaTrigger<Batched extends true ? DynamoDBEvent : DynamoDBEventRecord, void | DynamoDBEventResponse> {
  const batched = triggerOptions?.batched ?? false;

  return createLambdaTrigger({
    processor: event$ => (batched ? event$ : event$.pipe(mergeMap(dynamoDBEventToDynamoDBEventRecords))),
    test: input => (isDynamoDBEvent(input) ? input : false),
  });
}
