import type { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import type { DynamoDBSnapshotAttributeNames } from './dynamodb-snapshot-attribute-names';

/**
 * DynamoDB snapshot repository configuration
 */
export interface DynamoDBSnapshotRepositoryConfiguration {
  /**
   * DynamoDB client
   */
  readonly dynamoDBClient?: DynamoDBClient;
  /**
   * DynamoDB table name
   */
  readonly tableName: string;
  /**
   * List of attribute names used to map a snapshot to a DynamoDB item
   */
  readonly attributeNames?: Partial<DynamoDBSnapshotAttributeNames>;
}
