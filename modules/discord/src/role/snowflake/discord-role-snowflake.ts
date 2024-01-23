import { type DiscordSnowflake } from '../../snowflake/discord-snowflake';

/**
 * Discord role snowflake
 */
export type DiscordRoleSnowflake = DiscordSnowflake & {
  readonly __type_discordRoleSnowflake: unique symbol;
};
