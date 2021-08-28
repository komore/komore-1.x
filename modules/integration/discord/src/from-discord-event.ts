import { Observable } from '@komore/reactive';
import type { Client, ClientEvents } from 'discord.js';

/**
 * Creates an observable that emits events from a Discord client
 * @param client Discord client
 * @param eventName Event name
 * @returns Observable that emits events from the Discord client
 */
export function fromDiscordEvent<EventName extends keyof ClientEvents>(
  client: Client,
  eventName: EventName
): Observable<ClientEvents[EventName]> {
  return new Observable<ClientEvents[EventName]>(subscriber => {
    function listener(...args: ClientEvents[EventName]): void {
      subscriber.next(args);
    }

    client.on(eventName, listener);
    subscriber.add(() => client.off(eventName, listener));
  });
}
