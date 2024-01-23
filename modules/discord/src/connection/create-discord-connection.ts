import { pipe } from '@komore/functional';
import { createWebSocketConnection } from '@komore/http/client/websocket';
import { defer, mergeMap, share, Subject, ignoreValues, startWith, type Observable, filter } from '@komore/reactive';

import { discordGatewayOpcode } from './data/discord-gateway-event-data';
import { type DiscordConnection } from './discord-connection';
import { type DiscordConnectionOptions } from './discord-connection-options';
import { type DiscordConnectionStatus } from './discord-connection-status';
import { createDiscordConnectionHandlers } from './handlers/create-discord-connection-handlers';
import { discordReceivePayloadWithType } from './payload/discord-receive-payload-with-type';
import { discordSendPayloadToWebSocketMessage } from './payload/discord-send-payload-to-websocket-message';
import { messageEventToDiscordReceivePayload } from './payload/message-event-to-discord-receive-payload';

/**
 * Creates a Discord connection
 *
 * @param options Discord connection options
 * @returns Discord connection
 */
export function createDiscordConnection(options: DiscordConnectionOptions): Observable<DiscordConnection> {
  return defer(() => {
    const { endpointUrl = new URL('wss://gateway.discord.gg'), identify, parallelism } = options;
    const status$ = new Subject<DiscordConnectionStatus>();
    const emitter = new Subject<string>();
    const events$ = createWebSocketConnection({ emitter, url: endpointUrl });
    const payloads$ = events$.pipe(mergeMap(messageEventToDiscordReceivePayload(), parallelism), share({}));
    const gatewayEvents$ = payloads$.pipe(filter(discordReceivePayloadWithType(discordGatewayOpcode)), share({}));
    const send = pipe(discordSendPayloadToWebSocketMessage(), message => emitter.next(message));
    return createDiscordConnectionHandlers({ identify, payloads$, send }).pipe(
      ignoreValues(),
      startWith({
        gatewayEvents$,
        payloads$,
        send,
        status$,
      })
    );
  });
}
