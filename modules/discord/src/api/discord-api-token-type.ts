import { type discordApiTokenTypes } from './discord-api-token-types';

/**
 * Discord API token type
 */
export type DiscordApiTokenType = (typeof discordApiTokenTypes)[number];
