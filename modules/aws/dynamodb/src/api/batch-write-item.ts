import {
  BatchWriteItemCommand,
  type BatchWriteItemCommandInput,
  type BatchWriteItemCommandOutput,
  type DynamoDBClient,
} from '@aws-sdk/client-dynamodb';
import { sendAwsCommand } from '@komore/integration-aws';
import { type Observable } from '@komore/reactive';

/**
 * Puts or deletes multiple items in one or more DynamoDB tables
 *
 * @param commandInput `BatchWriteItem` command input
 * @param dynamoDBClient DynamoDB client
 * @returns Observable `BatchWriteItem` command output
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html BatchWriteItem}
 */
export function batchWriteItem(
  dynamoDBClient: DynamoDBClient,
  commandInput: BatchWriteItemCommandInput
): Observable<BatchWriteItemCommandOutput> {
  return sendAwsCommand(dynamoDBClient, new BatchWriteItemCommand(commandInput));
}

// TODO: circumvent 25 items/16 MB limitation
