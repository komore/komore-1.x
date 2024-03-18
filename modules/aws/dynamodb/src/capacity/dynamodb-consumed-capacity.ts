import { type ReadonlyRecord } from '@komore/typescript';

import { type DynamoDBTableName } from '../table/name/dynamodb-table-name';
import { type DynamoDBCapacity } from './dynamodb-capacity';

/**
 * DynamoDB consumed capacity
 *
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ConsumedCapacity.html ConsumedCapacity}
 */
export interface DynamoDBConsumedCapacity {
  /**
   * Total number of capacity units consumed by the operation
   */
  readonly CapacityUnits: number;
  /**
   * Amount of throughput consumed for each global index affected by the operation
   */
  readonly GlobalSecondaryIndexes: ReadonlyRecord<string, DynamoDBCapacity>;
  /**
   * Amount of throughput consumed for each local index affected by the operation
   */
  readonly LocalSecondaryIndexes: ReadonlyRecord<string, DynamoDBCapacity>;
  /**
   * Total number of read capacity units consumed by the operation
   */
  readonly ReadCapacityUnits: number;
  /**
   * The amount of throughput consumed on the table affected by the operation
   */
  readonly Table: DynamoDBCapacity;
  /**
   * Table name
   */
  readonly TableName: DynamoDBTableName;
  /**
   * Total number of write capacity units consumed by the operation
   */
  readonly WriteCapacityUnits: number;
}
