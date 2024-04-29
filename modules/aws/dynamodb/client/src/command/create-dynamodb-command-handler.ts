import { matchCommand } from '@komore/command';

import { type DynamoDBCommandHandler } from './dynamodb-command-handler';
import { type DynamoDBCommandHandlerOptions } from './dynamodb-command-handler-options';

/**
 * Creates a DynamoDB command handler
 *
 * @param handlerOptions DynamoDB command handler options
 * @returns DynamoDB command handler
 */
export function createDynamoDBCommandHandler(handlerOptions: DynamoDBCommandHandlerOptions): DynamoDBCommandHandler {
  const { apiClient: _ } = handlerOptions;
  return command => matchCommand(command, {});
}
