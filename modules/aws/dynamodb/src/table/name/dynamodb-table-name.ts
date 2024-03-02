/**
 * DynamoDB table name
 */
export type DynamoDBTableName = string & {
  readonly __tag_awsDynamoDBTableName: unique symbol;
};
