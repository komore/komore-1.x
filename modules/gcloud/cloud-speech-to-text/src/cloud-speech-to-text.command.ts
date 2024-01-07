import { commandProperties, createCommandType } from '@komore/command';
import { type protos } from '@google-cloud/speech';

import { cloudSpeechToTextDomain } from './cloud-speech-to-text.domain';

/**
 * Cloud Speech-to-Text command
 */
export const cloudSpeechToTextCommand = createCommandType(cloudSpeechToTextDomain, {
  /**
   * Performs synchronous speech recognition
   *
   * @see {@link https://cloud.google.com/nodejs/docs/reference/speech/latest/speech/v2.speechclient-class#_google_cloud_speech_v2_SpeechClient_recognize_member_1_ v2.SpeechClient.recognize()}
   */
  recognize: commandProperties<protos.google.cloud.speech.v2.IRecognizeRequest>(),
});
