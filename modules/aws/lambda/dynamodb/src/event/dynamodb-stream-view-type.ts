import { type dynamoDBStreamViewTypes } from './dynamodb-stream-view-types';

/**
 * DynamoDB stream view type
 */
export type DynamoDBStreamViewType = (typeof dynamoDBStreamViewTypes)[number];
