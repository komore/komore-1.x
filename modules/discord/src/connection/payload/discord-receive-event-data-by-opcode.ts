import { type DiscordGatewayEventData, type discordGatewayOpcode } from '../data/discord-gateway-event-data';
import {
  type DiscordHeartbeatAckEventData,
  type discordHeartbeatAckOpcode,
} from '../data/discord-heartbeat-ack-event-data';
import { type DiscordHelloEventData, type discordHelloOpcode } from '../data/discord-hello-event-data';
import { type DiscordReconnectEventData, type discordReconnectOpcode } from '../data/discord-reconnect-event-data';

/**
 * Discord receive event data by opcode
 */
export interface DiscordReceiveEventDataByOpcode {
  [discordGatewayOpcode]: DiscordGatewayEventData;
  [discordHeartbeatAckOpcode]: DiscordHeartbeatAckEventData;
  [discordHelloOpcode]: DiscordHelloEventData;
  [discordReconnectOpcode]: DiscordReconnectEventData;
}
