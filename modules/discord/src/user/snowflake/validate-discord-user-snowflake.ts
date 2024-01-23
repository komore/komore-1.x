import { discordTypeError } from '../../discord-type.error';
import { type DiscordUserSnowflake } from './discord-user-snowflake';
import { isDiscordUserSnowflake } from './is-discord-user-snowflake';

/**
 * Validates that a string is a valid Discord user snowflake identifier
 *
 * @param userSnowflake User snowflake string
 */
export function validateDiscordUserSnowflake(userSnowflake: string): asserts userSnowflake is DiscordUserSnowflake {
  if (!isDiscordUserSnowflake(userSnowflake)) {
    throw discordTypeError.invalidUserSnowflake({ userSnowflake });
  }
}
