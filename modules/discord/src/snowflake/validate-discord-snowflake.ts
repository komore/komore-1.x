import { discordTypeError } from '../discord-type.error';
import { type DiscordSnowflake } from './discord-snowflake';
import { isDiscordSnowflake } from './is-discord-snowflake';

/**
 * Validates that a string is a valid Discord snowflake identifier
 *
 * @param snowflake Snowflake string
 */
export function validateDiscordSnowflake(snowflake: string): asserts snowflake is DiscordSnowflake {
  if (!isDiscordSnowflake(snowflake)) {
    throw discordTypeError.invalidSnowflake({ snowflake });
  }
}
