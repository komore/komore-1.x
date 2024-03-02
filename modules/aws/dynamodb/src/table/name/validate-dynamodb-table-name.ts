import { dynamoDBTypeError } from '../../dynamodb-type.error';
import { type DynamoDBTableName } from './dynamodb-table-name';
import { isDynamoDBTableName } from './is-dynamodb-table-name';

/**
 * Validates that a string is a DynamoDB table name
 *
 * @param tableName Table name string
 */
export function validateDynamoDBTableName(tableName: string): asserts tableName is DynamoDBTableName {
  if (!isDynamoDBTableName(tableName)) {
    throw dynamoDBTypeError.invalidTableName({ tableName });
  }
}
