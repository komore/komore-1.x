import { type discordConnectionStatuss } from './discord-connection-statuses';

/**
 * Discord connection status
 */
export type DiscordConnectionStatus = (typeof discordConnectionStatuss)[number];
