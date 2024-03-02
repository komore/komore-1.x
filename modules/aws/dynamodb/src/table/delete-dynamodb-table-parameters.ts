import { type DynamoDBTableName } from './name/dynamodb-table-name';

/**
 * Delete DynamoDB table parameters
 *
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html#API_DeleteTable_RequestParameters DeleteTable Request Parameters}
 */
export interface DeleteDynamoDBTableParameters {
  /**
   * DynamoDB table name
   */
  readonly TableName: DynamoDBTableName;
}
