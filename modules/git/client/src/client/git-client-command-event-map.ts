import { createClientCommandEventMap } from '@komore/client';

import { type gitCommand } from '../git.command';
import { type gitEvent } from '../git.event';

/**
 * Git client command-to-event map
 */
export const gitClientCommandEventMap = createClientCommandEventMap<typeof gitCommand, typeof gitEvent>()({
  fetch: 'fetched',
  initialize: 'initialized',
  push: 'pushed',
});
