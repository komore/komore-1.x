import { type Client } from '@komore/client';

import { type cloudSpeechToTextCommand } from '../cloud-speech-to-text.command';
import { type cloudSpeechToTextEvent } from '../cloud-speech-to-text.event';
import { type cloudSpeechToTextQuery } from '../cloud-speech-to-text.query';
import { type cloudSpeechToTextError } from '../cloud-speech-to-text.error';
import { type cloudSpeechToTextCommandEventMap } from './cloud-speech-to-text-command-event-map';

/**
 * Cloud Speech-to-Text client
 */
export type CloudSpeechToTextClient = Client<
  typeof cloudSpeechToTextCommand,
  typeof cloudSpeechToTextEvent,
  typeof cloudSpeechToTextQuery,
  typeof cloudSpeechToTextError,
  typeof cloudSpeechToTextCommandEventMap
>;
