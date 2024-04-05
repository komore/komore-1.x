import { createClientCommandEventMap } from '@komore/client';

import { type neptuneCommand } from '../neptune.command';
import { type neptuneEvent } from '../neptune.event';

/**
 * Neptune client command-to-event map
 */
export const neptuneClientCommandEventMap = createClientCommandEventMap<typeof neptuneCommand, typeof neptuneEvent>()(
  {}
);
