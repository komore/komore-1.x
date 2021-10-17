import type { ClientEvents } from 'discord.js';
import type { DiscordClient } from './discord-client';

/**
 * Discord event
 */
export interface DiscordEvent<EventName extends keyof ClientEvents> {
  readonly client: DiscordClient,
  readonly eventArguments: ClientEvents[EventName];
  readonly eventName: EventName;
}
