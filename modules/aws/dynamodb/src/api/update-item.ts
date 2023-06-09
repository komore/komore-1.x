import {
  UpdateItemCommand,
  type DynamoDBClient,
  type UpdateItemCommandInput,
  type UpdateItemCommandOutput,
} from '@aws-sdk/client-dynamodb';
import { sendAwsCommand } from '@komore/integration-aws';
import { type Observable } from '@komore/reactive';

/**
 * Updates an existing item's attributes or adds a new item to the table if it did not already exist
 *
 * @param dynamoDBClient DynamoDB client
 * @param commandInput `UpdateItem` command input
 * @returns `UpdateItem` command output
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateItem.html UpdateItem}
 */
export function updateItem(
  dynamoDBClient: DynamoDBClient,
  commandInput: UpdateItemCommandInput
): Observable<UpdateItemCommandOutput> {
  return sendAwsCommand(dynamoDBClient, new UpdateItemCommand(commandInput));
}
