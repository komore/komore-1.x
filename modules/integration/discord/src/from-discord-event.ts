import { Observable } from '@komore/reactive';
import type { Client, ClientEvents } from 'discord.js';
import { DiscordEvent } from './discord-event';

/**
 * Creates an observable that emits events from a Discord client
 * @param client Discord client
 * @param eventName Event name
 * @returns Observable that emits events from the Discord client
 */
export function fromDiscordEvent<EventNames extends (keyof ClientEvents)[]>(
  client: Client,
  eventNames: EventNames
): Observable<DiscordEvent<EventNames[number]>> {
  return new Observable<DiscordEvent<EventNames[number]>>(subscriber => {
    const listeners = eventNames.map(eventName => ({
      eventName,
      listener: (...eventArguments: ClientEvents[EventNames[number]]) => subscriber.next({
        eventName,
        eventArguments
      })
    }));

    listeners.forEach(({ eventName, listener }) => client.on(eventName, listener));
    subscriber.add(() => listeners.forEach(({ eventName, listener }) => client.off(eventName, listener)));
  });
}
