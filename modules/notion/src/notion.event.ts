import { createEventType } from '@komore/event';

import { notionDomain } from './notion.domain';

/**
 * Notion event
 */
export const notionEvent = createEventType(notionDomain, {});
