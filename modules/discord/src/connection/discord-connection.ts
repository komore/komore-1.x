import { type Observable } from '@komore/reactive';

import { discordGatewayOpcode } from './data/discord-gateway-event-data';
import { type DiscordConnectionStatus } from './discord-connection-status';
import { type DiscordReceivePayload } from './payload/discord-receive-payload';
import { type DiscordSendPayload } from './payload/discord-send-payload';

/**
 * Discord connection
 */
export interface DiscordConnection {
  /**
   * Gateway events
   */
  readonly gatewayEvents$: Observable<DiscordReceivePayload<typeof discordGatewayOpcode>>;
  /**
   * Payloads
   */
  readonly payloads$: Observable<DiscordReceivePayload>;
  /**
   * Sends a payload
   *
   * @param payload Payload
   */
  readonly send: (payload: DiscordSendPayload) => void;
  /**
   * Status
   */
  readonly status$: Observable<DiscordConnectionStatus>;
}
