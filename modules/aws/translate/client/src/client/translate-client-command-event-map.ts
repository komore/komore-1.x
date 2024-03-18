import { createClientCommandEventMap } from '@komore/client';

import { type translateCommand } from '../translate.command';
import { type translateEvent } from '../translate.event';

/**
 * Translate client command-to-event map
 *
 * @private
 */
export const translateClientCommandEventMap = createClientCommandEventMap<
  typeof translateCommand,
  typeof translateEvent
>()({
  translateText: 'textTranslated',
});
