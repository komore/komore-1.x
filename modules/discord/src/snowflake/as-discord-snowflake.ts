import { type DiscordSnowflake } from './discord-snowflake';
import { validateDiscordSnowflake } from './validate-discord-snowflake';

/**
 * Safely casts a string to a Discord snowflake
 *
 * @param snowflake Discord snowflake string
 * @returns Discord snowflake
 */
export function asDiscordSnowflake(snowflake: string): DiscordSnowflake {
  validateDiscordSnowflake(snowflake);
  return snowflake;
}
