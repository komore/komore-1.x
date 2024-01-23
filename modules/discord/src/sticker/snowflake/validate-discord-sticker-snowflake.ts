import { discordTypeError } from '../../discord-type.error';
import { type DiscordStickerSnowflake } from './discord-sticker-snowflake';
import { isDiscordStickerSnowflake } from './is-discord-sticker-snowflake';

/**
 * Validates that a string is a valid Discord sticker snowflake identifier
 *
 * @param stickerSnowflake Sticker snowflake string
 */
export function validateDiscordStickerSnowflake(
  stickerSnowflake: string
): asserts stickerSnowflake is DiscordStickerSnowflake {
  if (!isDiscordStickerSnowflake(stickerSnowflake)) {
    throw discordTypeError.invalidStickerSnowflake({ stickerSnowflake });
  }
}
