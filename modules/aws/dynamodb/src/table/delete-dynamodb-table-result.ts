import { type DynamoDBTableDescription } from './dynamodb-table-description';

/**
 * Delete DynamoDB table result
 *
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DeleteTable.html#API_DeleteTable_ResponseElements DeleteTable Response Elements}
 */
export interface DeleteDynamoDBTableResult {
  /**
   * Table description
   */
  readonly TableDescription: DynamoDBTableDescription;
}
