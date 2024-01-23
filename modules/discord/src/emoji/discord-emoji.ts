import { type DiscordRole } from '../role/discord-role';
import { type DiscordUser } from '../user/discord-user';
import { type DiscordEmojiSnowflake } from './snowflake/discord-emoji-snowflake';

/**
 * Discord emoji
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#emoji-object Discord Emoji}
 */
export interface DiscordEmoji {
  /**
   * Whether the emoji is animated
   */
  readonly animated?: boolean;
  /**
   * Whether the emoji is available
   */
  readonly available?: boolean;
  /**
   * Emoji identifier
   */
  readonly id: DiscordEmojiSnowflake;
  /**
   * Whether the emoji is managed
   */
  readonly managed?: boolean;
  /**
   * Emoji name
   *
   * @note Can only be null for a reaction emoji
   */
  readonly name: string | null;
  /**
   * Whether the emoji must be wrapped in colons
   */
  readonly require_colons?: boolean;
  /**
   * List of roles allowed to use the emoji
   */
  readonly roles?: ReadonlyArray<DiscordRole>;
  /**
   * User who created the emoji
   */
  readonly user?: DiscordUser;
}
