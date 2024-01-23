import { type DiscordApiClient } from '../discord-api-client';
import { type DiscordIdentifyEventData } from './data/discord-identify-event-data';

/**
 * Discord connection options
 */
export interface DiscordConnectionOptions {
  /**
   * Discord API client
   */
  readonly apiClient: DiscordApiClient;
  /**
   * Endpoint URL
   *
   * @note Defaults to wss://gateway.discord.gg
   */
  readonly endpointUrl?: URL;
  /**
   * Identify event data
   */
  readonly identify: DiscordIdentifyEventData;
  /**
   * Parallelism when decompressing WebSocket messages
   */
  readonly parallelism: number;
}
