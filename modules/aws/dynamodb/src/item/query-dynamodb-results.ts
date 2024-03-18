import { type QueryDynamoDBResult } from './query-dynamodb-result';

/**
 * Creates a function that combines query DynamoDB results
 *
 * @returns Function that combines query DynamoDB results
 */
export function queryDynamoDBResults(): (acc: QueryDynamoDBResult, result: QueryDynamoDBResult) => QueryDynamoDBResult {
  return (acc, result) => {
    const ConsumedCapacity = {
      ...acc.ConsumedCapacity,
    };
    const Count = acc.Count + result.Count;
    const Items = [...acc.Items, ...result.Items];
    const { LastEvaluatedKey } = result;
    const ScannedCount = acc.ScannedCount + result.ScannedCount;
    return {
      ConsumedCapacity,
      Count,
      Items,
      ...(LastEvaluatedKey !== undefined ? { LastEvaluatedKey } : {}),
      ScannedCount,
    };
  };
}
