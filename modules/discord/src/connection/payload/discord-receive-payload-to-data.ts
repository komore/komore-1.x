import { type DiscordReceivePayload } from './discord-receive-payload';

/**
 * Returns a Discord receive payload's data
 *
 * @param receivePayload Discord receive payload
 * @returns Discord receive payload data
 */
export function discordReceivePayloadToData<PayloadType extends DiscordReceivePayload>(
  receivePayload: PayloadType
): PayloadType['d'] {
  return receivePayload.d;
}
