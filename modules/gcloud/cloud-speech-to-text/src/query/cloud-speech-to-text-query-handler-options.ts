import { type v2 } from '@google-cloud/speech';

/**
 * Cloud Speech-to-Text query handler options
 */
export interface CloudSpeechToTextQueryHandlerOptions {
  /**
   * Speech client
   */
  readonly speechClient$: Observable<v2.SpeechClient>;
}
