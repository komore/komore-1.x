import { type CommandEventPairFromType } from '@komore/client';
import { type DiscordApiClient } from '@komore/discord';

import { type discordCommand } from '../discord.command';
import { type discordEvent } from '../discord.event';

/**
 * Discord command handler options
 */
export interface DiscordCommandHandlerOptions {
  /**
   * Discord API client
   */
  readonly apiClient: DiscordApiClient;
  /**
   * Discord events recorder
   */
  readonly toEvents: (pair: CommandEventPairFromType<typeof discordCommand, typeof discordEvent>) => void;
}
