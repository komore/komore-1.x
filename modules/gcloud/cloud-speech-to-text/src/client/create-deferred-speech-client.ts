import { v2 } from '@google-cloud/speech';

import { deferPromise } from '@komore/reactive';

import { type CloudSpeechToTextClientOptions } from './cloud-speech-to-text-client-options';

/**
 * Creates a deferred Speech client
 *
 * @param clientOptions Cloud Speech-to-Text client options
 * @returns Initialized Speech client
 * @private
 */
export function createDeferredSpeechClient(clientOptions: CloudSpeechToTextClientOptions): Observable<v2.SpeechClient> {
  return deferPromise(async () => {
    const { endpointUrl, projectId } = clientOptions;
    const apiEndpoint = endpointUrl.toString();
    const speechClient = new v2.SpeechClient({ apiEndpoint, projectId });
    await speechClient.initialize();
    return speechClient;
  });
}
