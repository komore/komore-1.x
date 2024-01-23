import { isDiscordSnowflake } from '../../snowflake/is-discord-snowflake';

import { type DiscordEmojiSnowflake } from './discord-emoji-snowflake';

/**
 * Tests whether a string is a valid Discord emoji snowflake
 *
 * @param emojiSnowflake Emoji snowflake string
 * @returns true if the string is a valid Discord emoji snowflake
 */
export function isDiscordEmojiSnowflake(emojiSnowflake: string): emojiSnowflake is DiscordEmojiSnowflake {
  return isDiscordSnowflake(emojiSnowflake);
}
