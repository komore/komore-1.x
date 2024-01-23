import { type DiscordApplicationSnowflake } from './discord-application-snowflake';
import { validateDiscordApplicationSnowflake } from './validate-discord-application-snowflake';

/**
 * Safely casts a string to a Discord application snowflake
 *
 * @param applicationSnowflake Discord application snowflake string
 * @returns Discord application snowflake
 */
export function asDiscordApplicationSnowflake(applicationSnowflake: string): DiscordApplicationSnowflake {
  validateDiscordApplicationSnowflake(applicationSnowflake);
  return applicationSnowflake;
}
