import { filter, ignoreValues, map, merge, share, switchMap, type Observable, mapTo, tapNext } from '@komore/reactive';

import { discordHelloOpcode } from '../data/discord-hello-event-data';
import { discordIdentifyOpcode } from '../data/discord-identify-event-data';
import { discordPayloadDataToSendPayload } from '../payload/discord-payload-data-to-send-payload';
import { discordReceivePayloadToData } from '../payload/discord-receive-payload-to-data';
import { discordReceivePayloadWithType } from '../payload/discord-receive-payload-with-type';
import { type DiscordConnectionHandlersOptions } from './discord-connection-handlers-options';
import { discordHelloEventDataToHeartbeat } from './discord-hello-event-data-to-heartbeat';

/**
 * Creates a Discord connection's handlers
 *
 * @param options Discord connection handlers options
 * @returns Observable that complete once the connection termines
 */
export function createDiscordConnectionHandlers(options: DiscordConnectionHandlersOptions): Observable<never> {
  const { identify, payloads$, send } = options;
  const hello$ = payloads$.pipe(filter(discordReceivePayloadWithType(discordHelloOpcode)), share({}));
  const heartbeatHandling$ = hello$.pipe(
    map(discordReceivePayloadToData),
    switchMap(discordHelloEventDataToHeartbeat(send))
  );
  const identifyHandling$ = hello$.pipe(
    mapTo(identify),
    map(discordPayloadDataToSendPayload(discordIdentifyOpcode)),
    tapNext(send)
  );

  return merge([heartbeatHandling$, identifyHandling$]).pipe(ignoreValues());
}
