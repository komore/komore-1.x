import { type DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { type DynamoDBEventAttributeNames } from './dynamodb-event-attribute-names';

/**
 * DynamoDB event repository configuration
 */
export interface DynamoDBEventRepositoryConfiguration {
  /**
   * DynamoDB client
   */
  readonly dynamoDBClient?: DynamoDBClient;
  /**
   * DynamoDB table name
   */
  readonly tableName: string;
  /**
   * List of attribute names used to map an event to a DynamoDB item
   */
  readonly attributeNames?: Partial<DynamoDBEventAttributeNames>;
}
