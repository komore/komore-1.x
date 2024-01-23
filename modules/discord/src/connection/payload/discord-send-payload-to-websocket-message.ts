import { type DiscordSendPayload } from './discord-send-payload';

/**
 * Creates a function that returns a WebSocket message, given a Discord send payload
 *
 * @returns Function that returns a WebSocket message, given a Discord send payload
 */
export function discordSendPayloadToWebSocketMessage(): (payload: DiscordSendPayload) => string {
  return payload => JSON.stringify(payload);
}
