import { type ClientEvents } from 'discord.js';
import { type DiscordEvent } from './discord-event';

/**
 * Returns the event name from a Discord event
 * @param discordEvent Discord event
 * @returns Event name
 * @template EventName Event name
 */
export function toDiscordEventName<EventName extends keyof ClientEvents>(
  discordEvent: DiscordEvent<EventName>
): EventName {
  return discordEvent.eventName;
}
