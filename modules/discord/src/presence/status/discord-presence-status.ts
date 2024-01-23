import { type discordPresenceStatuses } from './discord-presence-statuses';

/**
 * Discord presence status
 */
export type DiscordPresenceStatus = (typeof discordPresenceStatuses)[number];
