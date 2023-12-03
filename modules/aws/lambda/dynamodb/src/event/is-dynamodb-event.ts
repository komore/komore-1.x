import { createLambdaEventSourceTypeTest } from '@komore/function-lambda';
import { type DynamoDBEvent } from './dynamodb-event';

/**
 * Tests whether an event is a DynamoDB event
 * @param event Event
 * @returns true if the event is a DynamoDB event
 */
export const isDynamoDBEvent = createLambdaEventSourceTypeTest<DynamoDBEvent>('aws:dynamodb');
