import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

/**
 * DynamoDB snapshot repository configuration
 */
export type DynamoDBSnapshotRepositoryConfiguration = Readonly<{
  dynamoDBClient?: DynamoDBClient;
  tableName: string;
  attributeNames: Readonly<{
    aggregateKey: string;
    sequenceNumber: string;
    state: string;
    timestamp: string;
  }>;
}>;

/**
 * DynamoDB snapshot repository configuration initial value
 */
export type DynamoDBSnapshotRepositoryConfigurationInit = Omit<
  DynamoDBSnapshotRepositoryConfiguration,
  'attributeNames'
> &
  Readonly<{
    attributeNames?: Partial<DynamoDBSnapshotRepositoryConfiguration['attributeNames']>;
  }>;
