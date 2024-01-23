import { isDiscordSnowflake } from '../../snowflake/is-discord-snowflake';

import { type DiscordChannelSnowflake } from './discord-channel-snowflake';

/**
 * Tests whether a string is a valid Discord channel snowflake
 *
 * @param channelSnowflake Channel snowflake string
 * @returns true if the string is a valid Discord channel snowflake
 */
export function isDiscordChannelSnowflake(channelSnowflake: string): channelSnowflake is DiscordChannelSnowflake {
  return isDiscordSnowflake(channelSnowflake);
}
