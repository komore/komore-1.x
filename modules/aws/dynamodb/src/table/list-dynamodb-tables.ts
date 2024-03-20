import { type DynamoDBApiClient } from '../dynamodb-api-client';
import { type ListDynamoDBTablesParameters } from './list-dynamodb-tables-parameters';
import { type ListDynamoDBTablesResult } from './list-dynamodb-tables-result';

/**
 * Creates a function that lists DynamoDB tables
 *
 * @param apiClient DynamoDB API client
 * @returns Function that lists DynamoDB tables
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html ListTables}
 */
export function listDynamoDBTables(
  apiClient: DynamoDBApiClient
): (parameters: ListDynamoDBTablesParameters) => Observable<ListDynamoDBTablesResult> {
  const operation = 'ListTables';
  return parameters => apiClient({ operation, parameters });
}
