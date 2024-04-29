import { matchCommand } from '@komore/command';

import { type ComprehendCommandHandler } from './comprehend-command-handler';
import { type ComprehendCommandHandlerOptions } from './comprehend-command-handler-options';

/**
 * Creates a Comprehend command handler
 *
 * @param handlerOptions Comprehend command handler options
 * @returns Comprehend command handler
 */
export function createComprehendCommandHandler(
  handlerOptions: ComprehendCommandHandlerOptions
): ComprehendCommandHandler {
  const { apiClient, toEvents } = handlerOptions;
  apiClient;
  toEvents;
  return command => matchCommand(command, {});
}
