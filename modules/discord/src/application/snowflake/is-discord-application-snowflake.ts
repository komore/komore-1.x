import { isDiscordSnowflake } from '../../snowflake/is-discord-snowflake';

import { type DiscordApplicationSnowflake } from './discord-application-snowflake';

/**
 * Tests whether a string is a valid Discord application snowflake
 *
 * @param applicationSnowflake Application snowflake string
 * @returns true if the string is a valid Discord application snowflake
 */
export function isDiscordApplicationSnowflake(
  applicationSnowflake: string
): applicationSnowflake is DiscordApplicationSnowflake {
  return isDiscordSnowflake(applicationSnowflake);
}
