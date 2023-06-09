import {
  PutItemCommand,
  type DynamoDBClient,
  type PutItemCommandInput,
  type PutItemCommandOutput,
} from '@aws-sdk/client-dynamodb';
import { sendAwsCommand } from '@komore/integration-aws';
import { type Observable } from '@komore/reactive';

/**
 * Creates a new item or completely replaces an existing item
 *
 * @param dynamoDBClient DynamoDB client
 * @param commandInput `PutItem` command input
 * @returns `PutItem` command output
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html PutItem}
 */
export function putItem(
  dynamoDBClient: DynamoDBClient,
  commandInput: PutItemCommandInput
): Observable<PutItemCommandOutput> {
  return sendAwsCommand(dynamoDBClient, new PutItemCommand(commandInput));
}
