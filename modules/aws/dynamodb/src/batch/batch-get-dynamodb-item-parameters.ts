import { type ReadonlyRecord } from '@komore/typescript';

import { type DynamoDBConsumedCapacityType } from '../capacity/dynamodb-consumed-capacity-type';
import { type DynamoDBKeysAndAttributes } from '../item/dynamodb-keys-and-attributes';
import { type DynamoDBTableName } from '../table/name/dynamodb-table-name';

/**
 * Batch get DynamoDB item parameters
 *
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html#API_BatchGetItem_RequestParameters BatchGetItem Request Parameters}
 */
export interface BatchGetDynamoDBItemParameters {
  /**
   * Map of table names where each value is a map describing one or more items to retrieve from that table
   */
  readonly RequestItems: ReadonlyRecord<DynamoDBTableName, DynamoDBKeysAndAttributes>;
  /**
   * Whether and how the consumed capacity should be returned
   */
  readonly ReturnConsumedCapacity?: DynamoDBConsumedCapacityType;
}
