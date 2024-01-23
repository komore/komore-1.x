import { isDiscordSnowflake } from '../../snowflake/is-discord-snowflake';

import { type DiscordRoleSnowflake } from './discord-role-snowflake';

/**
 * Tests whether a string is a valid Discord role snowflake
 *
 * @param roleSnowflake Role snowflake string
 * @returns true if the string is a valid Discord role snowflake
 */
export function isDiscordRoleSnowflake(roleSnowflake: string): roleSnowflake is DiscordRoleSnowflake {
  return isDiscordSnowflake(roleSnowflake);
}
