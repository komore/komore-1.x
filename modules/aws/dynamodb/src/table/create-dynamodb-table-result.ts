import { type DynamoDBTableDescription } from './dynamodb-table-description';

/**
 * Create DynamoDB table result
 *
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html#API_CreateTable_ResponseElements CreateTable Response Elements}
 */
export interface CreateDynamoDBTableResult {
  /**
   * Table description
   */
  readonly TableDescription: DynamoDBTableDescription;
}
