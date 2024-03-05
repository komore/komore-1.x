import { type DynamoDBTableName } from '../table/name/dynamodb-table-name';

/**
 * Query DynamoDB parameters
 *
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html#API_Query_RequestParameters Query Request Parameters}
 */
export interface QueryDynamoDBParameters {
  /**
   * Table name
   */
  readonly TableName: DynamoDBTableName;
}
