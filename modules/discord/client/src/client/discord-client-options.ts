import { type DiscordApiClient } from '@komore/discord';

/**
 * Discord client options
 */
export interface DiscordClientOptions {
  /**
   * Discord API client
   */
  readonly apiClient: DiscordApiClient;
}
