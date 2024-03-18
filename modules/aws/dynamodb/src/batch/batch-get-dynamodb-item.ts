import { type DynamoDBApiClient } from '../dynamodb-api-client';
import { dynamoDBTargetPrefix } from '../dynamodb-target-prefix';
import { type BatchGetDynamoDBItemParameters } from './batch-get-dynamodb-item-parameters';
import { type BatchGetDynamoDBItemResult } from './batch-get-dynamodb-item-result';

/**
 * Creates a function that returns the attributes of one or more items from one or more tables
 *
 * @param apiClient DynamoDB API client
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html BatchGetItem}
 */
export function batchGetDynamoDBItem(
  apiClient: DynamoDBApiClient
): (parameters: BatchGetDynamoDBItemParameters) => Observable<BatchGetDynamoDBItemResult> {
  return parameters =>
    apiClient({
      operation: `${dynamoDBTargetPrefix}.BatchGetItem`,
      parameters,
    });
}
