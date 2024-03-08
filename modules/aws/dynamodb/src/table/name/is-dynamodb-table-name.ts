import { type DynamoDBTableName } from './dynamodb-table-name';

/**
 * Tests whether a string a DynamoDB table name
 *
 * @param tableName Table name string
 * @returns true if the string is a DynamoDB table name
 */
export function isDynamoDBTableName(tableName: string): tableName is DynamoDBTableName {
  return /^[a-zA-Z0-9_\.-]{3,255}$/.test(tableName);
}
