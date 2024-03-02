import { type DynamoDBApiClient } from '../dynamodb-api-client';
import { type UpdateDynamoDBTableParameters } from './update-dynamodb-table-parameters';
import { type UpdateDynamoDBTableResult } from './update-dynamodb-table-result';

/**
 * Creates a function that updates a DynamoDB table
 *
 * @param apiClient DynamoDB API client
 * @returns Function that updates a DynamoDB table
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_UpdateTable.html UpdateTable}
 */
export function updateDynamoDBTable(
  apiClient: DynamoDBApiClient
): (parameters: UpdateDynamoDBTableParameters) => Observable<UpdateDynamoDBTableResult> {
  return parameters => apiClient('UpdateTable', parameters);
}
