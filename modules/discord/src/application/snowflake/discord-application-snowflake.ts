import { type DiscordSnowflake } from '../../snowflake/discord-snowflake';

/**
 * Discord application snowflake
 */
export type DiscordApplicationSnowflake = DiscordSnowflake & {
  readonly __type_discordApplicationSnowflake: unique symbol;
};
