import { type DynamoDBApiClient } from '../dynamodb-api-client';
import { type DescribeDynamoDBTableParameters } from './describe-dynamodb-table-parameters';
import { type DescribeDynamoDBTableResult } from './describe-dynamodb-table-result';

/**
 * Creates a function that returns a DynamoDB table description
 *
 * @param apiClient DynamoDB API client
 * @returns Function that returns a DynamoDB table description
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html DescribeTable}
 */
export function describeDynamoDBTable(
  apiClient: DynamoDBApiClient
): (parameters: DescribeDynamoDBTableParameters) => Observable<DescribeDynamoDBTableResult> {
  return parameters => apiClient('DescribeTable', parameters);
}
