import type { DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

/**
 * Creates a DynamoDB client
 * @param configuration Configuration
 * @returns DynamoDB client
 */
export function createDynamoDBClient(configuration?: DynamoDBClientConfig): DynamoDBClient {
  return new DynamoDBClient(configuration ?? {});
}
