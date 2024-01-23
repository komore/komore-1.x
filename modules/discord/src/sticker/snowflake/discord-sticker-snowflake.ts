import { type DiscordSnowflake } from '../../snowflake/discord-snowflake';

/**
 * Discord sticker snowflake
 */
export type DiscordStickerSnowflake = DiscordSnowflake & {
  readonly __type_discordStickerSnowflake: unique symbol;
};
