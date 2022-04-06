import { type DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { withAwsClient } from '@komore/integration-amazon';
import { createDynamoDBClient } from '../create-dynamodb-client';

/**
 * Adds a DynamoDB client to a message
 * @param dynamoDBClient DynamoDB client
 * @returns Operator function that turns a message into a message with a DynamoDB client
 */
export const withDynamoDBClient = (dynamoDBClient?: DynamoDBClient) =>
  withAwsClient('dynamodb', dynamoDBClient ?? createDynamoDBClient());
