import { type DynamoDBTableName } from './name/dynamodb-table-name';

/**
 * List DynamoDB tables result
 *
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html#API_ListTables_ResponseElements ListTables Response Elements}
 */
export interface ListDynamoDBTablesResult {
  /**
   * Last table name that the operation evaluated
   */
  readonly LastEvaluatedTableName?: DynamoDBTableName;
  /**
   * Table names
   */
  readonly TableNames: ReadonlyArray<DynamoDBTableName>;
}
