import { discordTypeError } from '../../discord-type.error';
import { type DiscordGuildSnowflake } from './discord-guild-snowflake';
import { isDiscordGuildSnowflake } from './is-discord-guild-snowflake';

/**
 * Validates that a string is a valid Discord guild snowflake identifier
 *
 * @param guildSnowflake Guild snowflake string
 */
export function validateDiscordGuildSnowflake(guildSnowflake: string): asserts guildSnowflake is DiscordGuildSnowflake {
  if (!isDiscordGuildSnowflake(guildSnowflake)) {
    throw discordTypeError.invalidGuildSnowflake({ guildSnowflake });
  }
}
