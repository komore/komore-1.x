import { of, type Observable } from '@komore/reactive';

import { type DiscordReceivePayload } from './discord-receive-payload';
import { messageEventStringDataToDiscordReceivePayload } from './message-event-string-data-to-discord-receive-payload';

/**
 * Creates a function that returns a Discord receive payload, given a WebSocket message event
 *
 * @returns Function that returns a Discord receive payload, given a WebSocket message event
 */
export function messageEventToDiscordReceivePayload(): (
  messageEvent: MessageEvent
) => Observable<DiscordReceivePayload> {
  const stringDataToPayload = messageEventStringDataToDiscordReceivePayload();

  return ({ data }) => {
    if (typeof data === 'string') {
      const payload = stringDataToPayload(data);
      return of(payload);
    }

    console.log('hmpf not string payload');
    throw new Error('hmpf');
  };
}
