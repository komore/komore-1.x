import { type DynamoDBApiClient } from '../dynamodb-api-client';
import { type DeleteDynamoDBTableParameters } from './delete-dynamodb-table-parameters';
import { type DeleteDynamoDBTableResult } from './delete-dynamodb-table-result';

/**
 * Creates a function that deletes a DynamoDB table
 *
 * @param apiClient DynamoDB API client
 * @returns Function that deletes a DynamoDB table
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html DeleteTable}
 */
export function deleteDynamoDBTable(
  apiClient: DynamoDBApiClient
): (parameters: DeleteDynamoDBTableParameters) => Observable<DeleteDynamoDBTableResult> {
  return parameters => apiClient('DeleteTable', parameters);
}
