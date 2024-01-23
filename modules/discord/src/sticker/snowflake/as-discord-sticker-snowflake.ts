import { type DiscordStickerSnowflake } from './discord-sticker-snowflake';
import { validateDiscordStickerSnowflake } from './validate-discord-sticker-snowflake';

/**
 * Safely casts a string to a Discord sticker snowflake
 *
 * @param stickerSnowflake Discord sticker snowflake string
 * @returns Discord sticker snowflake
 */
export function asDiscordStickerSnowflake(stickerSnowflake: string): DiscordStickerSnowflake {
  validateDiscordStickerSnowflake(stickerSnowflake);
  return stickerSnowflake;
}
