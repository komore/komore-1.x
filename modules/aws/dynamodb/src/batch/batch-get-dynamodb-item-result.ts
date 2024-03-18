import { type ReadonlyRecord } from '@komore/typescript';

import { type DynamoDBConsumedCapacity } from '../capacity/dynamodb-consumed-capacity';
import { type DynamoDBAttributeValue } from '../item/dynamodb-attribute-value';
import { type DynamoDBKeysAndAttributes } from '../item/dynamodb-keys-and-attributes';
import { type DynamoDBTableName } from '../table/name/dynamodb-table-name';

/**
 * Batch get DynamoDB item result
 *
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html#API_BatchGetItem_ResponseElements BatchGetItem Response Elements}
 */
export interface BatchGetDynamoDBItemResult {
  /**
   * Read capacity units consumed by the entire operation
   */
  readonly ConsumedCapacity: ReadonlyArray<DynamoDBConsumedCapacity>;
  /**
   * Map with a list of items per table name
   */
  readonly Responses: ReadonlyRecord<DynamoDBTableName, ReadonlyArray<DynamoDBAttributeValue>>;
  /**
   * Map with a list of keys and attributes per table name
   */
  readonly UnprocessedKeys: ReadonlyRecord<DynamoDBTableName, ReadonlyArray<DynamoDBKeysAndAttributes>>;
}
