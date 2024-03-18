import { type DynamoDBApiClient } from '@komore/aws/dynamodb';

/**
 * DynamoDB command handler options
 */
export interface DynamoDBCommandHandlerOptions {
  /**
   * DynamoDB API client
   */
  readonly apiClient: DynamoDBApiClient;
}
