import { matchCommand } from '@komore/command';

import { type DiscordCommandHandler } from './discord-command-handler';
import { type DiscordCommandHandlerOptions } from './discord-command-handler-options';

/**
 * Creates a Discord command handler
 *
 * @param handlerOptions Discord command handler options
 * @returns Discord command handler
 */
export function createDiscordCommandHandler(handlerOptions: DiscordCommandHandlerOptions): DiscordCommandHandler {
  const { apiClient } = handlerOptions;
  return command => matchCommand(command, {});
}
