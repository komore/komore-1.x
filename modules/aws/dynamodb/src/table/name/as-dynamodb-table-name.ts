import { type DynamoDBTableName } from './dynamodb-table-name';
import { validateDynamoDBTableName } from './validate-dynamodb-table-name';

/**
 * Safely casts as whether a string to a DynamoDB table name
 *
 * @param tableName Table name string
 * @returns DynamoDB table name
 */
export function asDynamoDBTableName(tableName: string): DynamoDBTableName {
  validateDynamoDBTableName(tableName);
  return tableName;
}
