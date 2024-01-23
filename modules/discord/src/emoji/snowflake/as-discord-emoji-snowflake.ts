import { type DiscordEmojiSnowflake } from './discord-emoji-snowflake';
import { validateDiscordEmojiSnowflake } from './validate-discord-emoji-snowflake';

/**
 * Safely casts a string to a Discord emoji snowflake
 *
 * @param emojiSnowflake Discord emoji snowflake string
 * @returns Discord emoji snowflake
 */
export function asDiscordEmojiSnowflake(emojiSnowflake: string): DiscordEmojiSnowflake {
  validateDiscordEmojiSnowflake(emojiSnowflake);
  return emojiSnowflake;
}
