import { createErrorType, errorProperties } from '@komore/error';

import { discordDomain } from './discord.domain';

/**
 * Discord type error
 */
export const discordTypeError = createErrorType(discordDomain, {
  /**
   * Invalid application snowflake
   */
  invalidApplicationSnowflake: errorProperties<{
    /**
     * Application snowflake string
     */
    readonly applicationSnowflake: string;
  }>(),
  /**
   * Invalid channel snowflake
   */
  invalidChannelSnowflake: errorProperties<{
    /**
     * Channel snowflake string
     */
    readonly channelSnowflake: string;
  }>(),
  /**
   * Invalid emoji snowflake
   */
  invalidEmojiSnowflake: errorProperties<{
    /**
     * Emoji snowflake string
     */
    readonly emojiSnowflake: string;
  }>(),
  /**
   * Invalid guild snowflake
   */
  invalidGuildSnowflake: errorProperties<{
    /**
     * Guild snowflake string
     */
    readonly guildSnowflake: string;
  }>(),
  /**
   * Invalid presence status
   */
  invalidPresenceStatus: errorProperties<{
    /**
     * Presence status string
     */
    readonly presenceStatus: string;
  }>(),
  /**
   * Invalid role snowflake
   */
  invalidRoleSnowflake: errorProperties<{
    /**
     * Role snowflake string
     */
    readonly roleSnowflake: string;
  }>(),
  /**
   * Invalid snowflake
   */
  invalidSnowflake: errorProperties<{
    /**
     * Snowflake string
     */
    readonly snowflake: string;
  }>(),
  /**
   * Invalid sticker snowflake
   */
  invalidStickerSnowflake: errorProperties<{
    /**
     * Sticker snowflake string
     */
    readonly stickerSnowflake: string;
  }>(),
  /**
   * Invalid user snowflake
   */
  invalidUserSnowflake: errorProperties<{
    /**
     * User snowflake string
     */
    readonly userSnowflake: string;
  }>(),
});
