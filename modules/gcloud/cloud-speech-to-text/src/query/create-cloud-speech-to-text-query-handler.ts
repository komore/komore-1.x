import { matchQuery } from '@komore/query';
import { EMPTY } from '@komore/reactive';

import { type CloudSpeechToTextQueryHandler } from './cloud-speech-to-text-query-handler';
import { type CloudSpeechToTextQueryHandlerOptions } from './cloud-speech-to-text-query-handler-options';

/**
 * Creates a Cloud Speech-to-Text query handler
 *
 * @param handlerOptions Cloud Speech-to-Text query handler options
 * @returns Cloud Speech-to-Text query handler
 */
export function createCloudSpeechToTextQueryHandler(
  _handlerOptions: CloudSpeechToTextQueryHandlerOptions
): CloudSpeechToTextQueryHandler {
  return query =>
    matchQuery(query, {
      listRecognizers: () => EMPTY,
    });
}
