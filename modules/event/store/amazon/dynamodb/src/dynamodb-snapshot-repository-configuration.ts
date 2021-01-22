import type { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import type { DynamoDBSnapshotRepositoryAttributeNames } from './dynamodb-snapshot-repository-attribute-names';

/**
 * DynamoDB snapshot repository configuration
 */
export interface DynamoDBSnapshotRepositoryConfiguration {
  readonly dynamoDBClient?: DynamoDBClient;
  readonly tableName: string;
  readonly attributeNames?: Partial<DynamoDBSnapshotRepositoryAttributeNames>;
}
