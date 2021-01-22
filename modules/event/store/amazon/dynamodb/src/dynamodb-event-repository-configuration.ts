import type { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import type { DynamoDBEventRepositoryAttributeNames } from './dynamodb-event-repository-attribute-names';

/**
 * DynamoDB event repository configuration
 */
export interface DynamoDBEventRepositoryConfiguration {
  readonly dynamoDBClient?: DynamoDBClient;
  readonly tableName: string;
  readonly attributeNames?: Partial<DynamoDBEventRepositoryAttributeNames>;
}
