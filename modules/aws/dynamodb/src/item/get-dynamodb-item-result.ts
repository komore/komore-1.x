import { type ReadonlyRecord } from '@komore/typescript';

import { type DynamoDBAttributeValue } from './dynamodb-attribute-value';

/**
 * Get DynamoDB item result
 */
export interface GetDynamoDBItemResult {
  /**
   * Capacity units consumed by the operation
   */
  readonly ConsumedCapacity: unknown;
  /**
   * Map of attribute names to attribute values, as specified by the projection expression
   */
  readonly Item: ReadonlyRecord<string, DynamoDBAttributeValue>;
}
