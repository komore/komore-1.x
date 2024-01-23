import { type DiscordPresenceStatus } from './discord-presence-status';
import { validateDiscordPresenceStatus } from './validate-discord-presence-status';

/**
 * Safely casts a string to a Discord presence status
 *
 * @param presenceStatus Discord presence status string
 * @returns Discord presence status
 */
export function asDiscordPresenceStatus(presenceStatus: string): DiscordPresenceStatus {
  validateDiscordPresenceStatus(presenceStatus);
  return presenceStatus;
}
