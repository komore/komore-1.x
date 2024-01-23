import { createClientCommandEventMap } from '@komore/client';

import { eToroCommand } from '../etoro.command';
import { eToroEvent } from '../etoro.event';

/**
 * eToro command-to-event map
 */
export const eToroCommandEventMap = createClientCommandEventMap<typeof eToroCommand, typeof eToroEvent>()({});
