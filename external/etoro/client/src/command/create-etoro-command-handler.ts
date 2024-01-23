import { matchCommand } from '@komore/command';

import { type EToroCommandHandler } from './etoro-command-handler';
import { type EToroCommandHandlerOptions } from './etoro-command-handler-options';

/**
 * Creates an eToro command handler
 *
 * @param handlerOptions eToro command handler options
 * @returns eToro command handler
 */
export function createEToroCommandHandler(handlerOptions: EToroCommandHandlerOptions): EToroCommandHandler {
  const { apiClient, toEvents } = handlerOptions;
  return command => matchCommand(command, {});
}
