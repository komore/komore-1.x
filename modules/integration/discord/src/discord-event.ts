import type { ClientEvents } from "discord.js";

/**
 * Discord event
 */
export interface DiscordEvent<EventName extends keyof  ClientEvents> {
    readonly eventArguments: ClientEvents[EventName];
    readonly eventName: EventName;
}
