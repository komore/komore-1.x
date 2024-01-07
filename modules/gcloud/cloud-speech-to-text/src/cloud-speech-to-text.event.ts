import { createEventType, eventProperties } from '@komore/event';

import { cloudSpeechToTextDomain } from './cloud-speech-to-text.domain';
import { protos } from '@google-cloud/speech';

/**
 * Cloud Speech-to-Text event
 */
export const cloudSpeechToTextEvent = createEventType(cloudSpeechToTextDomain, {
  /**
   * A synchronous speech recognition completed
   *
   * @see {@link https://cloud.google.com/nodejs/docs/reference/speech/latest/speech/v2.speechclient-class#_google_cloud_speech_v2_SpeechClient_recognize_member_1_ v2.SpeechClient.recognize()}
   */
  recognized: eventProperties<protos.google.cloud.speech.v2.IRecognizeResponse>(),
});
