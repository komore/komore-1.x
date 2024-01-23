import { discordTypeError } from '../../discord-type.error';
import { type DiscordChannelSnowflake } from './discord-channel-snowflake';
import { isDiscordChannelSnowflake } from './is-discord-channel-snowflake';

/**
 * Validates that a string is a valid Discord channel snowflake identifier
 *
 * @param channelSnowflake Channel snowflake string
 */
export function validateDiscordChannelSnowflake(
  channelSnowflake: string
): asserts channelSnowflake is DiscordChannelSnowflake {
  if (!isDiscordChannelSnowflake(channelSnowflake)) {
    throw discordTypeError.invalidChannelSnowflake({ channelSnowflake });
  }
}
