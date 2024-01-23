import { type DiscordChannelSnowflake } from '../channel/snowflake/discord-channel-snowflake';
import { type DiscordEmojiSnowflake } from '../emoji/snowflake/discord-emoji-snowflake';

/**
 * Discord welcome screen channel
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure Welcome Screen Channel}
 */
export interface DiscordWelcomeScreenChannel {
  /**
   * Channel identifier
   */
  readonly channel_id: DiscordChannelSnowflake;
  /**
   * Description
   */
  readonly description: string;
  /**
   * Emoji identifier, if the emoji is custom
   */
  readonly emoji_id: DiscordEmojiSnowflake | null;
  /**
   * Emoji name if custom, Unicode character if standard
   */
  readonly emoji_name: string | null;
}
