import { type DynamoDBApiClient } from '../dynamodb-api-client';

import { type CreateDynamoDBTableParameters } from './create-dynamodb-table-parameters';
import { type CreateDynamoDBTableResult } from './create-dynamodb-table-result';

/**
 * Creates a function that creates a DynamoDB table
 *
 * @param apiClient DynamoDB API client
 * @returns Function that creates a DynamoDB table
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html CreateTable}
 */
export function createDynamoDBTable(
  apiClient: DynamoDBApiClient
): (parameters: CreateDynamoDBTableParameters) => Observable<CreateDynamoDBTableResult> {
  const operation = 'CreateTable';
  return parameters => apiClient({ operation, parameters });
}
