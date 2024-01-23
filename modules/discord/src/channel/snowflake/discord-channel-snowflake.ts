import { type DiscordSnowflake } from '../../snowflake/discord-snowflake';

/**
 * Discord channel snowflake
 */
export type DiscordChannelSnowflake = DiscordSnowflake & {
  readonly __type_discordChannelSnowflake: unique symbol;
};
