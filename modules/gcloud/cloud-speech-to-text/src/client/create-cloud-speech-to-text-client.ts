import { createClient } from '@komore/client';
import { cache } from '@komore/reactive';

import { cloudSpeechToTextCommand } from '../cloud-speech-to-text.command';
import { cloudSpeechToTextError } from '../cloud-speech-to-text.error';
import { cloudSpeechToTextEvent } from '../cloud-speech-to-text.event';
import { cloudSpeechToTextQuery } from '../cloud-speech-to-text.query';
import { createCloudSpeechToTextCommandHandler } from '../command/create-cloud-speech-to-text-command-handler';
import { createCloudSpeechToTextQueryHandler } from '../query/create-cloud-speech-to-text-query-handler';
import { type CloudSpeechToTextClient } from './cloud-speech-to-text-client';
import { type CloudSpeechToTextClientOptions } from './cloud-speech-to-text-client-options';
import { cloudSpeechToTextCommandEventMap } from './cloud-speech-to-text-command-event-map';
import { createDeferredSpeechClient } from './create-deferred-speech-client';

/**
 * Creates a Cloud Speech-to-Text client
 *
 * @param clientOptions Cloud Speech-to-Text client
 * @returns Cloud Speech-to-Text client
 */
export function createCloudSpeechToTextClient(clientOptions: CloudSpeechToTextClientOptions): CloudSpeechToTextClient {
  const speechClient$ = createDeferredSpeechClient(clientOptions).pipe(cache());

  return createClient({
    command: cloudSpeechToTextCommand,
    commandEventMap: cloudSpeechToTextCommandEventMap,
    commandHandler: toEvents => createCloudSpeechToTextCommandHandler({ speechClient$, toEvents }),
    error: cloudSpeechToTextError,
    event: cloudSpeechToTextEvent,
    query: cloudSpeechToTextQuery,
    queryHandler: () => createCloudSpeechToTextQueryHandler({ speechClient$ }),
  });
}
