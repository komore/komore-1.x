import { type DiscordUserSnowflake } from './discord-user-snowflake';
import { validateDiscordUserSnowflake } from './validate-discord-user-snowflake';

/**
 * Safely casts a string to a Discord user snowflake
 *
 * @param userSnowflake Discord user snowflake string
 * @returns Discord user snowflake
 */
export function asDiscordUserSnowflake(userSnowflake: string): DiscordUserSnowflake {
  validateDiscordUserSnowflake(userSnowflake);
  return userSnowflake;
}
