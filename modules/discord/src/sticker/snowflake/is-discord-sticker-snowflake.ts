import { isDiscordSnowflake } from '../../snowflake/is-discord-snowflake';

import { type DiscordStickerSnowflake } from './discord-sticker-snowflake';

/**
 * Tests whether a string is a valid Discord sticker snowflake
 *
 * @param stickerSnowflake Sticker snowflake string
 * @returns true if the string is a valid Discord sticker snowflake
 */
export function isDiscordStickerSnowflake(stickerSnowflake: string): stickerSnowflake is DiscordStickerSnowflake {
  return isDiscordSnowflake(stickerSnowflake);
}
