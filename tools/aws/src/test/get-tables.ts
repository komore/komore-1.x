import { type AwsApiServiceClientOptions } from '@komore/aws';
import { createDynamoDBApiClient, listDynamoDBTables } from '@komore/aws/dynamodb';

export function getTables(clientOptions: AwsApiServiceClientOptions) {
  const dynamoDBApiClient = createDynamoDBApiClient(clientOptions);
  const listTables = listDynamoDBTables(dynamoDBApiClient);
  return listTables({});
}
