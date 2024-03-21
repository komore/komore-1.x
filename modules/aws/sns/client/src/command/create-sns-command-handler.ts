import { matchCommand } from '@komore/command';

import { type SnsCommandHandler } from './sns-command-handler';
import { type SnsCommandHandlerOptions } from './sns-command-handler-options';

/**
 * Creates an SNS command handler
 *
 * @param handlerOptions SNS command handler options
 * @returns SNS command handler
 */
export function createSnsCommandHandler(handlerOptions: SnsCommandHandlerOptions): SnsCommandHandler {
  const { apiClient, toEvents } = handlerOptions;
  return command => matchCommand(command, {});
}
