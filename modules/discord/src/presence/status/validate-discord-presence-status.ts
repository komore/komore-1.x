import { discordTypeError } from '../../discord-type.error';
import { type DiscordPresenceStatus } from './discord-presence-status';
import { isDiscordPresenceStatus } from './is-discord-presence-status';

/**
 * Validates that a string is a valid Discord presence status identifier
 *
 * @param presenceStatus Presence status string
 */
export function validateDiscordPresenceStatus(presenceStatus: string): asserts presenceStatus is DiscordPresenceStatus {
  if (!isDiscordPresenceStatus(presenceStatus)) {
    throw discordTypeError.invalidPresenceStatus({ presenceStatus });
  }
}
