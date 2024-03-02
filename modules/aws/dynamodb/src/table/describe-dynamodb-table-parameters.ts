import { type DynamoDBTableName } from './name/dynamodb-table-name';

/**
 * Describe DynamoDB table parameters
 *
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html#API_DescribeTable_RequestParameters DescribeTable Request Parameters}
 */
export interface DescribeDynamoDBTableParameters {
  /**
   * DynamoDB table name
   */
  readonly TableName: DynamoDBTableName;
}
