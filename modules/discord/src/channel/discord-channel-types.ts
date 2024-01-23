/**
 * Discord channel types
 *
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-types Channel Types}
 */
export const discordChannelTypes = {
  /**
   * Text channel within a server
   */
  GUILD_TEXT: 0,
  /**
   * Direct message between users
   */
  DM: 1,
  /**
   * Voice channel within a server
   */
  GUILD_VOICE: 2,
  /**
   * Direct message between multiple users
   */
  GROUP_DM: 3,
  /**
   * Organized category that contains up to 50 channels
   */
  GUILD_CATEGORY: 4,
  /**
   * Channel that users can follow and crosspost into their own server
   */
  GUILD_ANNOUNCEMENT: 5,
  /**
   * Temporary sub-channel within a `GUILD_ANNOUNCEMENT` channel
   */
  ANNOUNCEMENT_THREAD: 10,
  /**
   * Temporary sub-channel within a `GUILD_TEXT` or `GUILD_FORUM` channel
   */
  PUBLIC_THREAD: 11,
  /**
   * Temporary sub-channel within a `GUILD_TEXT` channel that is only viewable by those invited or with the `MANAGE_THREADS` permission
   */
  PRIVATE_THREAD: 12,
  /**
   * Voice channel for hosting events with an audience
   */
  GUILD_STAGE_VOICE: 13,
  /**
   * Channel in a hub containing the listed servers
   */
  GUILD_DIRECTORY: 14,
  /**
   * Channel that can only contain threads
   */
  GUILD_FORUM: 15,
  /**
   * Channel that can only contain threads, similar to `GUILD_FORUM`
   */
  GUILD_MEDIA: 16,
} as const;
