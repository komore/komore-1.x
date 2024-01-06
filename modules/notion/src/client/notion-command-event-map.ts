import { createClientCommandEventMap } from '@komore/client';

import { type notionCommand } from '../notion.command';
import { type notionEvent } from '../notion.event';

/**
 * Notion command-to-event map
 */
export const notionCommandEventMap = createClientCommandEventMap<typeof notionCommand, typeof notionEvent>()({
  
});
