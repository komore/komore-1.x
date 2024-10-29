import { type DynamoDBApiClient } from '../dynamodb-api-client';
import { type BatchWriteDynamoDBItemParameters } from './batch-write-dynamodb-item-parameters';
import { type BatchWriteDynamoDBItemResult } from './batch-write-dynamodb-item-result';

/**
 * Creates a function that writes the attributes of one or more items to one or more tables
 *
 * @param apiClient DynamoDB API client
 * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html BatchWriteItem}
 */
export function batchWriteDynamoDBItem(
  apiClient: DynamoDBApiClient
): (parameters: BatchWriteDynamoDBItemParameters) => Observable<BatchWriteDynamoDBItemResult> {
  const operation = 'BatchWriteItem';
  return parameters => apiClient({ operation, parameters });
}
