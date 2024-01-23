import { type discordGatewayOpcode } from '../data/discord-gateway-event-data';
import { type DiscordGatewayEventDataByEventName } from './discord-gateway-event-data-by-event-name';
import { type DiscordReceivePayload } from './discord-receive-payload';

/**
 * Creates a function that tests whether a Discord gateway payload is with a specific event name
 *
 * @param eventNames Event names
 * @returns Function that tests whether a Discord gateway payload is with a specific event name
 */
export function discordGatewayPayloadWithEventName<
  EventNames extends ReadonlyArray<keyof DiscordGatewayEventDataByEventName>,
>(
  ...eventNames: EventNames
): (
  payload: DiscordReceivePayload<typeof discordGatewayOpcode>
) => payload is DiscordReceivePayload<typeof discordGatewayOpcode, EventNames[number]> {
  const set: ReadonlySet<string> = new Set(eventNames);
  return (payload): payload is DiscordReceivePayload<typeof discordGatewayOpcode, EventNames[number]> =>
    set.has(payload.t);
}
