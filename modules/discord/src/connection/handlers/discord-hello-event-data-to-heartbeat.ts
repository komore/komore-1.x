import { randomNumberBetween } from '@komore/random';
import { ignoreValues, map, tapNext, timer } from '@komore/reactive';

import { discordHeartbeatOpcode } from '../data/discord-heartbeat-event-data';
import { type DiscordHelloEventData } from '../data/discord-hello-event-data';
import { discordPayloadDataToSendPayload } from '../payload/discord-payload-data-to-send-payload';
import { type DiscordSendPayload } from '../payload/discord-send-payload';
import { mapToPreviousDiscordTimestamp } from './map-to-previous-discord-timestamp';

/**
 * Creates a function that sends heartbeats over a Discord gateway connection
 *
 * Upon receiving a gateway hello payload's data, a new timer is created that:
 *
 * - starts after a random delay between 0 milliseconds and the heartbeat interval, called the jitter in the
 *   {@link https://discord.com/developers/docs/topics/gateway#sending-heartbeats Discord documentation}
 * - periodically sends a heartbeat to Discord, according to the received heartbeat interval
 *
 * @param toDiscord Function that sends a heartbeat to Discord
 * @returns Function that sends heartbeats over a Discord gateway connection
 */
export function discordHelloEventDataToHeartbeat(
  toDiscord: (payload: DiscordSendPayload<typeof discordHeartbeatOpcode>) => void
): (eventData: DiscordHelloEventData) => Observable<never> {
  return ({ heartbeat_interval: interval }) => {
    const minimum = 0;
    const maximum = interval + 1;
    const randomNumber = randomNumberBetween({ minimum, maximum, integer: true });
    const initialDelay = randomNumber();
    return timer(initialDelay, interval).pipe(
      mapToPreviousDiscordTimestamp(),
      map(discordPayloadDataToSendPayload(discordHeartbeatOpcode)),
      tapNext(toDiscord),
      ignoreValues()
    );
  };
}
