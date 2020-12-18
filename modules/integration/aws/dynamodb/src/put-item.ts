import { DynamoDBClient, PutItemCommand, PutItemCommandInput } from '@aws-sdk/client-dynamodb';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Creates a new item or completely replaces an existing item
 * @param dynamoDBClient DynamoDB client
 * @param commandInput `PutItem` command input
 * @returns `PutItem` command output
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html PutItem}
 */
export const putItem = (dynamoDBClient: DynamoDBClient, commandInput: PutItemCommandInput) =>
  sendCommand(dynamoDBClient, new PutItemCommand(commandInput));
