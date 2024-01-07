import { createClientCommandEventMap } from '@komore/client';

import { type cloudSpeechToTextCommand } from '../cloud-speech-to-text.command';
import { type cloudSpeechToTextEvent } from '../cloud-speech-to-text.event';

/**
 * Cloud Speech-to-Text command-to-event map
 *
 * @private
 */
export const cloudSpeechToTextCommandEventMap = createClientCommandEventMap<
  typeof cloudSpeechToTextCommand,
  typeof cloudSpeechToTextEvent
>()({
  recognize: 'recognized',
});
