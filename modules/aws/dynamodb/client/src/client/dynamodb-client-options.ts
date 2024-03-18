import { type DynamoDBApiClient } from '@komore/aws/dynamodb';

/**
 * DynamoDB client options
 */
export interface DynamoDBClientOptions {
  /**
   * DynamoDB APi client
   */
  readonly apiClient: DynamoDBApiClient;
}
