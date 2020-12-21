import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

/**
 * DynamoDB event repository configuration
 */
export type DynamoDBEventRepositoryConfiguration = Readonly<{
  dynamoDBClient?: DynamoDBClient;
  tableName: string;
  attributeNames: Readonly<{
    aggregateKey: string;
    eventData: string;
    eventType: string;
    sequenceNumber: string;
    timestamp: string;
  }>;
}>;
