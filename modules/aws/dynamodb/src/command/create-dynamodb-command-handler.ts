import { matchAwsCommand } from '@komore/aws';

import { type DynamoDBCommandHandler } from './dynamodb-command-handler';
import { type DynamoDBCommandHandlerOptions } from './dynamodb-command-handler-options';

/**
 * Creates a DynamoDB command handler
 *
 * @param options DynamoDB command handler options
 * @returns DynamoDB command handler
 */
export function createDynamoDBCommandHandler(options: DynamoDBCommandHandlerOptions): DynamoDBCommandHandler {
  const { client } = options;
  return command => matchAwsCommand();
}
