import { type DiscordGatewayEventDataByEventName } from '../payload/discord-gateway-event-data-by-event-name';

/**
 * Discord gateway event data
 *
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#gateway-events Gateway events}
 */
export type DiscordGatewayEventData = DiscordGatewayEventDataByEventName[keyof DiscordGatewayEventDataByEventName];

/**
 * Discord gateway opcode
 */
export const discordGatewayOpcode = 0;
