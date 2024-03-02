import { type dynamoDBTableStatuses } from './dynamodb-table-statuses';

/**
 * DynamoDB table status
 */
export type DynamoDBTableStatus = (typeof dynamoDBTableStatuses)[number];
