import { type DiscordChannelSnowflake } from './discord-channel-snowflake';
import { validateDiscordChannelSnowflake } from './validate-discord-channel-snowflake';

/**
 * Safely casts a string to a Discord channel snowflake
 *
 * @param channelSnowflake Discord channel snowflake string
 * @returns Discord channel snowflake
 */
export function asDiscordChannelSnowflake(channelSnowflake: string): DiscordChannelSnowflake {
  validateDiscordChannelSnowflake(channelSnowflake);
  return channelSnowflake;
}
