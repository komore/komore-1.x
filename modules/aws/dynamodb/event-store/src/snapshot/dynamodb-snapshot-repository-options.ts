import { type DynamoDBClient } from '@komore/aws/dynamodb';
import { type DynamoDBSnapshotAttributeNames } from './dynamodb-snapshot-attribute-names';

/**
 * DynamoDB snapshot repository options
 */
export interface DynamoDBSnapshotRepositoryOptions {
  readonly apiClient: DynamoDBApiClient;
  /**
   * List of attribute names used to map a snapshot to a DynamoDB item
   */
  readonly attributeNames?: Partial<DynamoDBSnapshotAttributeNames>;
  /**
   * Whether to compress items (default: false)
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
