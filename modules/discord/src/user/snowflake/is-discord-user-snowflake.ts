import { isDiscordSnowflake } from '../../snowflake/is-discord-snowflake';

import { type DiscordUserSnowflake } from './discord-user-snowflake';

/**
 * Tests whether a string is a valid Discord user snowflake
 *
 * @param userSnowflake User snowflake string
 * @returns true if the string is a valid Discord user snowflake
 */
export function isDiscordUserSnowflake(userSnowflake: string): userSnowflake is DiscordUserSnowflake {
  return isDiscordSnowflake(userSnowflake);
}
