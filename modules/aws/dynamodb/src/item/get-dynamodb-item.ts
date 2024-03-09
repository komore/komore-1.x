import { type DynamoDBApiClient } from '../dynamodb-api-client';
import { dynamoDBTargetPrefix } from '../dynamodb-target-prefix';
import { type GetDynamoDBItemParameters } from './get-dynamodb-item-parameters';
import { type GetDynamoDBItemResult } from './get-dynamodb-item-result';

/**
 * Creates a function that returns a DynamoDB item
 *
 * @param apiClient DynamoDB API client
 * @returns Function that returns a DynamoDB item
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html GetItem}
 */
export function getDynamoDBItem(
  apiClient: DynamoDBApiClient
): (parameters: GetDynamoDBItemParameters) => Observable<GetDynamoDBItemResult> {
  return parameters =>
    apiClient({
      operation: `${dynamoDBTargetPrefix}.GetItem`,
      parameters,
    });
}
