import { type DynamoDBTableDescription } from './dynamodb-table-description';

/**
 * Describe DynamoDB table result
 *
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html#API_DescribeTable_ResponseElements DescribeTable Response Elements}
 */
export interface DescribeDynamoDBTableResult {
  /**
   * Table
   */
  readonly Table: DynamoDBTableDescription;
}
