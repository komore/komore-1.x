import { isDiscordSnowflake } from '../../snowflake/is-discord-snowflake';

import { type DiscordGuildSnowflake } from './discord-guild-snowflake';

/**
 * Tests whether a string is a valid Discord guild snowflake
 *
 * @param guildSnowflake Guild snowflake string
 * @returns true if the string is a valid Discord guild snowflake
 */
export function isDiscordGuildSnowflake(guildSnowflake: string): guildSnowflake is DiscordGuildSnowflake {
  return isDiscordSnowflake(guildSnowflake);
}
