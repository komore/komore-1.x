import { type DynamoDBClient } from '@aws-sdk/client-dynamodb';

/**
 * DynamoDB command handler options
 */
export interface DynamoDBCommandHandlerOptions {
  /**
   * DynamoDB client
   */
  readonly client: DynamoDBClient;
}
