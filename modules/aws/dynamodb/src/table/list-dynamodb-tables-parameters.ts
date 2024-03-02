/**
 * List DynamoDB tables parameters
 *
 * @see {@link https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ListTables.html#API_ListTables_RequestParameters ListTables Request Parameters}
 */
export interface ListDynamoDBTablesParameters {
  /**
   * First table name that the operation will evaluate
   *
   * @note Can be used with `LastEvaluatedTableName` from a previous operation's result
   */
  readonly ExclusiveStartTableName?: string;
  /**
   * Maximum number of table names to return
   *
   * @note Defaults to 100
   */
  readonly Limit?: number;
}
