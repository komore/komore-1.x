import { discordTypeError } from '../../discord-type.error';
import { type DiscordApplicationSnowflake } from './discord-application-snowflake';
import { isDiscordApplicationSnowflake } from './is-discord-application-snowflake';

/**
 * Validates that a string is a valid Discord application snowflake identifier
 *
 * @param applicationSnowflake Application snowflake string
 */
export function validateDiscordApplicationSnowflake(
  applicationSnowflake: string
): asserts applicationSnowflake is DiscordApplicationSnowflake {
  if (!isDiscordApplicationSnowflake(applicationSnowflake)) {
    throw discordTypeError.invalidApplicationSnowflake({ applicationSnowflake });
  }
}
