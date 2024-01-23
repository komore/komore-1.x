import { discordTypeError } from '../../discord-type.error';
import { type DiscordRoleSnowflake } from './discord-role-snowflake';
import { isDiscordRoleSnowflake } from './is-discord-role-snowflake';

/**
 * Validates that a string is a valid Discord role snowflake identifier
 *
 * @param roleSnowflake Role snowflake string
 */
export function validateDiscordRoleSnowflake(roleSnowflake: string): asserts roleSnowflake is DiscordRoleSnowflake {
  if (!isDiscordRoleSnowflake(roleSnowflake)) {
    throw discordTypeError.invalidRoleSnowflake({ roleSnowflake });
  }
}
