import { type DiscordSnowflake } from '../../snowflake/discord-snowflake';

/**
 * Discord emoji snowflake
 */
export type DiscordEmojiSnowflake = DiscordSnowflake & {
  readonly __type_discordEmojiSnowflake: unique symbol;
};
