import { type DiscordSendEventDataByOpcode } from './discord-send-event-data-by-opcode';

/**
 * Discord send payload
 *
 * @template Opcode Opcode
 */
export interface DiscordSendPayload<
  Opcode extends keyof DiscordSendEventDataByOpcode = keyof DiscordSendEventDataByOpcode,
> {
  /**
   * Opcode
   */
  readonly op: Opcode;
  /**
   * Data
   */
  readonly d: DiscordSendEventDataByOpcode[Opcode];
}
