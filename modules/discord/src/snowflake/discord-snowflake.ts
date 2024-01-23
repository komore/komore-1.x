/**
 * Discord snowflake
 */
export type DiscordSnowflake = string & {
  readonly __type_discordSnowflake: unique symbol;
};
