import type { ClientEvents } from 'discord.js';
import type { DiscordEvent } from './discord-event';

/**
 * Returns the event arguments from a Discord event
 * @param discordEvent Discord event
 * @returns Event arguments
 * @template EventName Event name
 */
export function toDiscordEventArguments<EventName extends keyof ClientEvents>(
  discordEvent: DiscordEvent<EventName>
): ClientEvents[EventName] {
  return discordEvent.eventArguments;
}
