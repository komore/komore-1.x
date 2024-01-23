import { type DiscordStickerSnowflake } from './snowflake/discord-sticker-snowflake';

/**
 * Discord sticker
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object Sticker}
 */
export interface DiscordSticker {
  /**
   * Sticker identifier
   */
  readonly id: DiscordStickerSnowflake;
  // TODO
}
