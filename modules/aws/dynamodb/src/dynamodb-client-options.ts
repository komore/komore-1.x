import { type Logger } from '@komore/logging';

/**
 * DynamoDB client options
 */
export interface DynamoDBClientOptions {
  /**
   * Logger
   */
  readonly logger: Logger;
}
