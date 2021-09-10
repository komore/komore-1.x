import { ClientEvents } from 'discord.js';
import { DiscordEvent } from './discord-event';

/**
 * Creates a function that tests whether a Discord event is one of a set of specific types
 * @param eventNames Event names
 * @returns Function that tests whether a Discord event is one of the set of specific types
 */
export function isDiscordEventType<EventNames extends (keyof ClientEvents)[]>(
  ...eventNames: EventNames
): (discordEvent: DiscordEvent<keyof ClientEvents>) => discordEvent is DiscordEvent<EventNames[number]> {
  return (discordEvent): discordEvent is DiscordEvent<EventNames[number]> =>
    eventNames.includes(discordEvent.eventName);
}
