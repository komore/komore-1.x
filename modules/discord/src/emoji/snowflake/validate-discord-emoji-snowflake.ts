import { discordTypeError } from '../../discord-type.error';
import { type DiscordEmojiSnowflake } from './discord-emoji-snowflake';
import { isDiscordEmojiSnowflake } from './is-discord-emoji-snowflake';

/**
 * Validates that a string is a valid Discord emoji snowflake identifier
 *
 * @param emojiSnowflake Emoji snowflake string
 */
export function validateDiscordEmojiSnowflake(emojiSnowflake: string): asserts emojiSnowflake is DiscordEmojiSnowflake {
  if (!isDiscordEmojiSnowflake(emojiSnowflake)) {
    throw discordTypeError.invalidEmojiSnowflake({ emojiSnowflake });
  }
}
