import { type ReadonlyRecord } from '@komore/typescript';

import { type DynamoDBConsumedCapacity } from '../capacity/dynamodb-consumed-capacity';
import { type DynamoDBTableName } from '../table/name/dynamodb-table-name';
import { type DynamoDBAttributeValue } from './dynamodb-attribute-value';

/**
 * Get DynamoDB item parameters
 *
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_GetItem.html#API_GetItem_RequestParameters GetItem Request Parameters}
 */
export interface GetDynamoDBItemParameters {
  /**
   * List of attributes to retrieve
   *
   * @deprecated Use `ProjectionExpression`
   */
  readonly AttributesToGet?: unknown;
  /**
   * Whether the read should be strongly consistent instead of eventually consistent
   */
  readonly ConsistentRead?: boolean;
  /**
   * Substitution tokens for attribute names in an expression
   */
  readonly ExpressionAttributeNames?: ReadonlyRecord<string, string>;
  /**
   * Map of attribute names
   */
  readonly Key: ReadonlyRecord<string, DynamoDBAttributeValue>;
  /**
   * String that identifies one or more attributes to retrieve from the table
   */
  readonly ProjectionExpression?: string;
  /**
   * Level of detail for the returned consumption
   */
  readonly ReturnConsumedCapacity?: DynamoDBConsumedCapacity;
  /**
   * Table name
   */
  readonly TableName: DynamoDBTableName;
}
