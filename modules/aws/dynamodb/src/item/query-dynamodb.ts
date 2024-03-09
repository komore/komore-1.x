import { type DynamoDBApiClient } from '../dynamodb-api-client';
import { dynamoDBTargetPrefix } from '../dynamodb-target-prefix';
import { type QueryDynamoDBParameters } from './query-dynamodb-parameters';
import { type QueryDynamoDBResult } from './query-dynamodb-result';

/**
 * Creates a function that queries DynamoDB
 *
 * @param apiClient DynamoDB API client
 * @returns Function that query DynamoDB
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html Query}
 */
export function queryDynamoDB(
  apiClient: DynamoDBApiClient
): (parameters: QueryDynamoDBParameters) => Observable<QueryDynamoDBResult> {
  return parameters =>
    apiClient({
      operation: `${dynamoDBTargetPrefix}.Query`,
      parameters,
    });
}
