import { createClientCommandEventMap } from '@komore/client';

import { type comprehendCommand } from '../comprehend.command';
import { type comprehendEvent } from '../comprehend.event';

/**
 * Comprehend client command-to-event map
 */
export const comprehendClientCommandEventMap = createClientCommandEventMap<
  typeof comprehendCommand,
  typeof comprehendEvent
>()({});
