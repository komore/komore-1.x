import type { ClientEvents } from 'discord.js';
import type { DiscordEvent } from './discord-event';

/**
 * Creates a function that tests whether a Discord event is one of a set of specific names
 * @param eventNames Event names
 * @returns Function that tests whether a Discord event is one of the set of specific names
 */
export function isDiscordEventName<EventNames extends (keyof ClientEvents)[]>(
  ...eventNames: EventNames
): (discordEvent: DiscordEvent<keyof ClientEvents>) => discordEvent is DiscordEvent<EventNames[number]> {
  return (discordEvent): discordEvent is DiscordEvent<EventNames[number]> =>
    eventNames.includes(discordEvent.eventName);
}
