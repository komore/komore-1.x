import { type DynamoDBClient, UpdateItemCommand, type UpdateItemCommandInput } from '@aws-sdk/client-dynamodb';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Updates an existing item's attributes or adds a new item to the table if it did not already exist
 * @param dynamoDBClient DynamoDB client
 * @param commandInput `UpdateItem` command input
 * @returns `UpdateItem` command output
 */
export const updateItem = (dynamoDBClient: DynamoDBClient, commandInput: UpdateItemCommandInput) =>
  sendCommand(dynamoDBClient, new UpdateItemCommand(commandInput));
