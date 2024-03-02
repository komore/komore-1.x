import { createErrorType, errorProperties } from '@komore/error';

import { dynamoDBDomain } from './dynamodb.domain';

/**
 * DynamoDB type error
 */
export const dynamoDBTypeError = createErrorType(dynamoDBDomain, {
  /**
   * Invalid table name
   */
  invalidTableName: errorProperties<{
    /**
     * Table name
     */
    readonly tableName: string;
  }>(),
});
