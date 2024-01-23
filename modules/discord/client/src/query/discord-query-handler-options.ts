import { type DiscordApiClient } from '@komore/discord';

/**
 * Discord query handler options
 */
export interface DiscordQueryHandlerOptions {
  /**
   * Discord API client
   */
  readonly apiClient: DiscordApiClient;
}
