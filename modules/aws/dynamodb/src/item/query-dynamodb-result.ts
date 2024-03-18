import { type ReadonlyRecord } from '@komore/typescript';

import { type DynamoDBConsumedCapacity } from '../capacity/dynamodb-consumed-capacity';
import { type DynamoDBAttributeValue } from './dynamodb-attribute-value';

/**
 * Query DynamoDB result
 *
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html#API_Query_ResponseElements Query Response Elements}
 */
export interface QueryDynamoDBResult {
  /**
   * Consumed capacity
   */
  readonly ConsumedCapacity: DynamoDBConsumedCapacity;
  /**
   * Number of items
   */
  readonly Count: number;
  /**
   * List of items
   */
  readonly Items: ReadonlyArray<ReadonlyRecord<string, DynamoDBAttributeValue>>;
  /**
   * Primary key of the item where the operation stopped
   */
  readonly LastEvaluatedKey?: ReadonlyRecord<string, DynamoDBAttributeValue>;
  /**
   * Number of evaluated items
   */
  readonly ScannedCount: number;
}
