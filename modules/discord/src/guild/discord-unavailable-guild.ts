import { type DiscordGuildSnowflake } from './snowflake/discord-guild-snowflake';

/**
 * Discord unavailable guild
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#unavailable-guild-object Unavailable Guild}
 */
export interface DiscordUnavailableGuild {
  /**
   * Guild identifier
   */
  readonly id: DiscordGuildSnowflake;
  /**
   * Whether the guild is unavailable
   */
  readonly unavailable: true;
}
