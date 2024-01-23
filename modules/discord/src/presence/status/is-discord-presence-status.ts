import { type DiscordPresenceStatus } from './discord-presence-status';
import { discordPresenceStatuses } from './discord-presence-statuses';

/**
 * Tests whether a string is a valid Discord presence status
 *
 * @param presenceStatus Presence status string
 * @returns true if the string is a valid Discord presence status
 */
export function isDiscordPresenceStatus(presenceStatus: string): presenceStatus is DiscordPresenceStatus {
  return set.has(presenceStatus);
}

const set: ReadonlySet<string> = new Set(discordPresenceStatuses);
