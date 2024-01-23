import { type DiscordSendEventDataByOpcode } from './discord-send-event-data-by-opcode';
import { type DiscordSendPayload } from './discord-send-payload';

/**
 * Creates a function that returns a Discord send payload for a specific opcode, given a payload's data
 *
 * @param opcode Opcode
 * @returns Function that returns a Discord send payload, given a payload's data
 */
export function discordPayloadDataToSendPayload<Opcode extends keyof DiscordSendEventDataByOpcode>(
  opcode: Opcode
): (payloadData: DiscordSendEventDataByOpcode[Opcode]) => DiscordSendPayload<Opcode> {
  return d => ({
    d,
    op: opcode,
  });
}
