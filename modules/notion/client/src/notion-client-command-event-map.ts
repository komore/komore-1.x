import { createClientCommandEventMap } from '@komore/client';

import { type notionCommand } from './notion.command';
import { type notionEvent } from './notion.event';

/**
 * Notion client command-to-event map
 */
export const notionClientCommandEventMap = createClientCommandEventMap<typeof notionCommand, typeof notionEvent>()({
  createPage: 'pageCreated',
});
