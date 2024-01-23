import { type DiscordGuildSnowflake } from './discord-guild-snowflake';
import { validateDiscordGuildSnowflake } from './validate-discord-guild-snowflake';

/**
 * Safely casts a string to a Discord guild snowflake
 *
 * @param guildSnowflake Discord guild snowflake string
 * @returns Discord guild snowflake
 */
export function asDiscordGuildSnowflake(guildSnowflake: string): DiscordGuildSnowflake {
  validateDiscordGuildSnowflake(guildSnowflake);
  return guildSnowflake;
}
