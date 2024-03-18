import { type ReadonlyRecord } from '@komore/typescript';

import { type DynamoDBConsumedCapacityType } from '../capacity/dynamodb-consumed-capacity-type';
import { type DynamoDBWriteRequest } from '../request/dynamodb-write-request';
import { type DynamoDBTableName } from '../table/name/dynamodb-table-name';

/**
 * Batch write DynamoDB item parameters
 *
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html#API_BatchWriteItem_RequestParameters BatchWriteItem Request Parameters}
 */
export interface BatchWriteDynamoDBItemParameters {
  /**
   * Map of write requests by table name
   */
  readonly RequestItems: ReadonlyRecord<DynamoDBTableName, ReadonlyArray<DynamoDBWriteRequest>>;
  /**
   * Whether and how the consumed capacity should be returned
   */
  readonly ReturnConsumedCapacity?: DynamoDBConsumedCapacityType;
}
