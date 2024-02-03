import { type v2 } from '@google-cloud/speech';

import { CommandEventPair } from '@komore/client';
import { CommandFromType } from '@komore/command';
import { EventFromType } from '@komore/event';

import { cloudSpeechToTextCommand } from '../cloud-speech-to-text.command';
import { cloudSpeechToTextEvent } from '../cloud-speech-to-text.event';

/**
 * Cloud Speech-to-Text command handler options
 */
export interface CloudSpeechToTextCommandHandlerOptions {
  /**
   * Speech client
   */
  readonly speechClient$: Observable<v2.SpeechClient>;
  /**
   * Cloud Speech-to-Text events recorder
   */
  readonly toEvents: (
    pair: CommandEventPair<
      CommandFromType<typeof cloudSpeechToTextCommand>,
      EventFromType<typeof cloudSpeechToTextEvent>
    >
  ) => void;
}
