import { type DiscordRoleSnowflake } from './discord-role-snowflake';
import { validateDiscordRoleSnowflake } from './validate-discord-role-snowflake';

/**
 * Safely casts a string to a Discord role snowflake
 *
 * @param roleSnowflake Discord role snowflake string
 * @returns Discord role snowflake
 */
export function asDiscordRoleSnowflake(roleSnowflake: string): DiscordRoleSnowflake {
  validateDiscordRoleSnowflake(roleSnowflake);
  return roleSnowflake;
}
