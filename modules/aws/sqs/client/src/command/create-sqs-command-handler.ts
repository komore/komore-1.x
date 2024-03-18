import { matchCommand } from '@komore/command';

import { type SqsCommandHandler } from './sqs-command-handler';
import { type SqsCommandHandlerOptions } from './sqs-command-handler-options';

/**
 * Creates an SQS command handler
 *
 * @param handlerOptions SQS command handler options
 * @returns SQS command handler
 */
export function createSqsCommandHandler(handlerOptions: SqsCommandHandlerOptions): SqsCommandHandler {
  const { apiClient: _, toEvents: _toEv } = handlerOptions;
  return command => matchCommand(command, {});
}
