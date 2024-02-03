import { type DiscordChannelSnowflake } from '../channel/snowflake/discord-channel-snowflake';
import { type DiscordApiClient } from '../discord-api-client';

/**
 * Creates a function that sends a Discord message to a channel
 *
 * @param apiClient Discord API client
 * @returns Function that sends a Discord message to a channel
 */
export function createDiscordMessage(
  apiClient: DiscordApiClient
): (params: unknown, channelId: DiscordChannelSnowflake) => Observable<unknown> {
  return (params, channelId) => apiClient('POST', `channels/${channelId}/messages`, params);
}
