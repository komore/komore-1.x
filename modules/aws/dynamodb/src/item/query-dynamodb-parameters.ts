import { type ReadonlyRecord } from '@komore/typescript';

import { type DynamoDBTableName } from '../table/name/dynamodb-table-name';
import { type DynamoDBAttributeValue } from './dynamodb-attribute-value';
import { type DynamoDBConsumedCapacityType } from '../capacity/dynamodb-consumed-capacity-type';

/**
 * Query DynamoDB parameters
 *
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html#API_Query_RequestParameters Query Request Parameters}
 */
export interface QueryDynamoDBParameters {
  /**
   * Whether strong consistency is used for the read
   */
  readonly ConsistentRead?: boolean;
  /**
   * Primary key of the first item to evaluate
   */
  readonly ExclusiveStartKey?: ReadonlyRecord<string, DynamoDBAttributeValue>;
  /**
   * Substitution tokens for attribute names in an expression
   */
  readonly ExpressionAttributeNames?: ReadonlyRecord<string, string>;
  /**
   * Filter expression
   */
  readonly FilterExpression?: string;
  /**
   * Index name
   */
  readonly IndexName?: string; // TODO: typed
  /**
   * Key condition expression
   */
  readonly KeyConditionExpression?: string;
  /**
   * Maximum number of items to evaluate
   */
  readonly Limit?: number;
  /**
   * Projection expression
   */
  readonly ProjectionExpression?: string;
  /**
   * Level of detail of the returned consumed capacity
   */
  readonly ReturnConsumedCapacity?: DynamoDBConsumedCapacityType;
  /**
   * Whether to perform the index traversal in ascending order rather than descending order
   */
  readonly ScanIndexForward?: boolean;
  /**
   * The attributes to return in the result
   */
  readonly Select?: 'ALL_ATTRIBUTES' | 'ALL_PROJECTED_ATTRIBUTES' | 'SPECIFIC_ATTRIBUTES' | 'COUNT'; // TODO: typed
  /**
   * Table name
   */
  readonly TableName: DynamoDBTableName;
}
