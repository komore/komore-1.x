import { type DynamoDBClient } from '@aws-sdk/client-dynamodb';

import { type Logger } from '@komore/logging';

/**
 * DynamoDB command handler options
 */
export interface DynamoDBCommandHandlerOptions {
  /**
   * DynamoDB client
   */
  readonly client: DynamoDBClient;
  /**
   * Logger
   */
  readonly logger: Logger;
}
