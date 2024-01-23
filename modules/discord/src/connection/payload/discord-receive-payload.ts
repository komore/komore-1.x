import { discordGatewayOpcode } from '../data/discord-gateway-event-data';
import { type DiscordGatewayEventDataByEventName } from './discord-gateway-event-data-by-event-name';
import { type DiscordReceiveEventDataByOpcode } from './discord-receive-event-data-by-opcode';

/**
 * Discord payload
 *
 * @template Opcode Opcode
 * @template EventName Event name,
 */
export interface DiscordReceivePayload<
  Opcode extends keyof DiscordReceiveEventDataByOpcode = keyof DiscordReceiveEventDataByOpcode,
  EventName extends Opcode extends typeof discordGatewayOpcode
    ? keyof DiscordGatewayEventDataByEventName
    : null = Opcode extends typeof discordGatewayOpcode ? keyof DiscordGatewayEventDataByEventName : null,
> {
  /**
   * Data
   */
  readonly d: EventName extends keyof DiscordGatewayEventDataByEventName
    ? DiscordGatewayEventDataByEventName[EventName]
    : DiscordReceiveEventDataByOpcode[Opcode];
  /**
   * Opcode
   */
  readonly op: Opcode;
  /**
   * Sequence number
   */
  readonly s: Opcode extends typeof discordGatewayOpcode ? number : null;
  /**
   * Event name
   */
  readonly t: Opcode extends typeof discordGatewayOpcode ? EventName : null;
}
