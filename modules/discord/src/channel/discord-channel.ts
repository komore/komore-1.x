import { type DiscordGuildSnowflake } from '../guild/snowflake/discord-guild-snowflake';
import { type DiscordChannelType } from './discord-channel-type';
import { type DiscordChannelSnowflake } from './snowflake/discord-channel-snowflake';

/**
 * Discord channel
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object Channel}
 */
export interface DiscordChannel {
  /**
   * Guild identifier
   */
  readonly guild_id?: DiscordGuildSnowflake;
  /**
   * Channel identifier
   */
  readonly id: DiscordChannelSnowflake;
  /**
   * Channel name
   */
  readonly name?: string | null;
  /**
   * List of permission overwrites for members and roles
   */
  readonly permission_overwrites?: ReadonlyArray</*DiscordOverwrite*/ unknown>; // TODO
  /**
   * Sorting position
   */
  readonly position?: number;
  /**
   * Channel topic
   */
  readonly topic?: string | null;
  /**
   * Channel type
   */
  readonly type: DiscordChannelType;
  // TODO: nsfw, last_message_id, bitrate, etc...
}
