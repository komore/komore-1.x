import { BatchWriteItemCommand, type BatchWriteItemCommandInput, type DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { sendCommand } from '@komore/integration-amazon';

// TODO: circumvent 25 items/16 MB limitation
/**
 * Puts or deletes multiple items in one or more DynamoDB tables
 * @param commandInput `BatchWriteItem` command input
 * @param dynamoDBClient DynamoDB client
 * @returns Observable `BatchWriteItem` command output
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html BatchWriteItem}
 */
export const batchWriteItem = (dynamoDBClient: DynamoDBClient, commandInput: BatchWriteItemCommandInput) =>
  sendCommand(dynamoDBClient, new BatchWriteItemCommand(commandInput));
