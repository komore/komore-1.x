import { type DiscordRoleSnowflake } from './snowflake/discord-role-snowflake';

/**
 * Discord role
 *
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object Discord Role}
 */
export interface DiscordRole {
  /**
   * Role identifier
   */
  readonly id: DiscordRoleSnowflake;
  /**
   * Role name
   */
  readonly name: string;
  // TODO: color, hoist, etc.
}
