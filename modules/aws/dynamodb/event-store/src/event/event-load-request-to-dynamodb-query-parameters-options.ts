import { type DynamoDBTableName } from '@komore/aws/dynamodb';

import { type DynamoDBEventAttributeNames } from './dynamodb-event-attribute-names';

/**
 * Event load request to DynamoDB query parameters options
 */
export interface EventLoadRequestToDynamoDBQueryParametersOptions {
  /**
   * Attribute names
   */
  readonly attributeNames: DynamoDBEventAttributeNames;
  /**
   * Table name
   */
  readonly tableName: DynamoDBTableName;
}
