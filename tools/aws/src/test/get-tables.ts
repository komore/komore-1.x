import { AwsAccessKeyCredentials } from '@komore/aws';
import { createDynamoDBApiClient, listDynamoDBTables } from '@komore/aws/dynamodb';
import { HttpClient } from '@komore/http/client';
import { NodeEnvironmentVariables } from '@komore/node/environment';

export function getTables(
  httpClient: HttpClient,
  environmentVariables: NodeEnvironmentVariables,
  credentials: AwsAccessKeyCredentials
): Observable<unknown> {
  const dynamoDBApiClient = createDynamoDBApiClient({ credentials, environmentVariables, httpClient });
  const listTables = listDynamoDBTables(dynamoDBApiClient);
  return listTables({});
}
