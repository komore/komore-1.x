import { type DynamoDBApiClient, type DynamoDBTableName } from '@komore/aws/dynamodb';

import { type DynamoDBSnapshotRepositoryAttributeNames } from './attribute/dynamodb-snapshot-repository-attribute-names';

/**
 * DynamoDB snapshot repository options
 */
export interface DynamoDBSnapshotRepositoryOptions {
  /**
   * DynamoDB API client
   */
  readonly apiClient: DynamoDBApiClient;
  /**
   * List of attribute names used to map a snapshot to a DynamoDB item
   */
  readonly attributeNames?: Partial<DynamoDBSnapshotRepositoryAttributeNames>;
  /**
   * Whether to compress items (default: false)
   */
  readonly compress?: boolean;
  /**
   * DynamoDB table name
   */
  readonly tableName: DynamoDBTableName;
}
