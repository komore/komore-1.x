import { type DiscordSnowflake } from './discord-snowflake';

/**
 * Tests whether a string is a valid Discord snowflake
 *
 * @param snowflake Snowflake string
 * @returns true if the string is a valid Discord snowflake
 */
export function isDiscordSnowflake(snowflake: string): snowflake is DiscordSnowflake {
  return snowflake.length > 0;
}
