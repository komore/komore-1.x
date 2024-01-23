import { type DiscordSnowflake } from '../../snowflake/discord-snowflake';

/**
 * Discord guild snowflake
 */
export type DiscordGuildSnowflake = DiscordSnowflake & {
  readonly __type_discordGuildSnowflake: unique symbol;
};
