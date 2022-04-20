import { type DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { type DynamoDBEventAttributeNames } from './dynamodb-event-attribute-names';

/**
 * DynamoDB event repository options
 */
export interface DynamoDBEventRepositoryOptions {
  /**
   * List of attribute names used to map an event to a DynamoDB item
   */
  readonly attributeNames?: Partial<DynamoDBEventAttributeNames>;
  /**
   * Whether to compress items
   */
  readonly compress?: boolean;
  /**
   * DynamoDB client
   */
  readonly dynamoDBClient?: DynamoDBClient;
  /**
   * DynamoDB table name
   */
  readonly tableName: string;
}
