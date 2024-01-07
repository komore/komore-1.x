import { toEventCausedByCommand } from '@komore/client';
import { matchCommand } from '@komore/command';
import { first, fromPromise, map, mergeMap, redactValue, tapNext } from '@komore/reactive';

import { type CloudSpeechToTextCommandHandler } from './cloud-speech-to-text-command-handler';
import { type CloudSpeechToTextCommandHandlerOptions } from './cloud-speech-to-text-command-handler-options';
import { googleCloudClientResultToResponse } from '@komore/gcloud';
import { cloudSpeechToTextEvent } from '../cloud-speech-to-text.event';

/**
 * Creates a Cloud Speech-to-Text command handler
 *
 * @param handlerOptions Cloud Speech-to-Text command handler options
 * @returns Cloud Speech-to-Text command handler
 */
export function createCloudSpeechToTextCommandHandler(
  handlerOptions: CloudSpeechToTextCommandHandlerOptions
): CloudSpeechToTextCommandHandler {
  const { speechClient$, toEvents } = handlerOptions;
  return command =>
    speechClient$.pipe(
      first(),
      mergeMap(speechClient =>
        matchCommand(command, {
          recognize: request =>
            fromPromise(speechClient.recognize(request)).pipe(
              map(googleCloudClientResultToResponse),
              map(cloudSpeechToTextEvent.recognized)
            ),
        })
      ),
      map(toEventCausedByCommand(command)),
      tapNext(toEvents),
      redactValue()
    );
}
