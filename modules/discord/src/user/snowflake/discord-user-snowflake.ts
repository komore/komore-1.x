import { type DiscordSnowflake } from '../../snowflake/discord-snowflake';

/**
 * Discord user snowflake
 */
export type DiscordUserSnowflake = DiscordSnowflake & {
  readonly __type_discordUserSnowflake: unique symbol;
};
