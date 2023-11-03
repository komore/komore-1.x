import { type BatchGetItemCommand } from '@aws-sdk/client-dynamodb';

import { awsQueryProperties, createAwsQueryType } from '@komore/aws';

import { dynamoDBDomain } from './dynamodb.domain';

/**
 * DynamoDB query
 */
export const dynamoDBQuery = createAwsQueryType(dynamoDBDomain, {
  /**
   * Returns the attributes of one or more items from one or more tables
   *
   * @note This query contains logic to work around the 100 items per response limit of `BatchGetItem`
   * @note This query contains logic to work around the 16 MB per response limit of `BatchGetItem`
   * @note The `$metadata` property of the output only contains information about the last `BatchGetItem` operation
   * @note {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html BatchGetItem}
   */
  batchGetItem: awsQueryProperties<BatchGetItemCommand>(),
});
