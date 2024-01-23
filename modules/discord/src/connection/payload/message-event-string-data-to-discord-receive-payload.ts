import { type DiscordReceivePayload } from './discord-receive-payload';

/**
 * Creates a function that returns a Discord receive payload, given a WebSocket message event's string data
 *
 * @returns Function that returns a Discord receive payload, given a WebSocket message event's string data
 */
export function messageEventStringDataToDiscordReceivePayload(): (stringData: string) => DiscordReceivePayload {
  return stringData => {
    try {
      return JSON.parse(stringData) as DiscordReceivePayload;
    } catch (e) {
      console.log('invalid Discord JSON string payload', stringData, e);
      throw e;
    }
  };
}
