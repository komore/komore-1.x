import { type DiscordIdentifyEventData } from '../data/discord-identify-event-data';
import { type DiscordReceivePayload } from '../payload/discord-receive-payload';
import { type DiscordSendPayload } from '../payload/discord-send-payload';

/**
 * Discord connection handlers options
 *
 * @private
 */
export interface DiscordConnectionHandlersOptions {
  readonly identify: DiscordIdentifyEventData;
  readonly payloads$: Observable<DiscordReceivePayload>;
  readonly send: (payload: DiscordSendPayload) => void;
}
