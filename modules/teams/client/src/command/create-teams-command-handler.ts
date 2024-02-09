import { matchCommand } from '@komore/command';

import { type TeamsCommandHandler } from './teams-command-handler';
import { type TeamsCommandHandlerOptions } from './teams-command-handler-options';

/**
 * Creates a Teams command handler
 *
 * @param handlerOptions Teams command handler options
 * @returns Teams command handler
 */
export function createTeamsCommandHandler(handlerOptions: TeamsCommandHandlerOptions): TeamsCommandHandler {
  const { apiClient: _, toEvents: _1 } = handlerOptions;
  return command => matchCommand(command, {});
}
