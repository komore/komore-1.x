import { type dynamoDBEventNames } from './dynamodb-event-names';

/**
 * DynamoDB event name
 */
export type DynamoDBEventName = (typeof dynamoDBEventNames)[number];
