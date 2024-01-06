import { createEventType, eventProperties } from '@komore/event';

import { notionDomain } from './notion.domain';

/**
 * Notion event
 */
export const notionEvent = createEventType(notionDomain, {
  /**
   * A page has been created
   *
   * @see {@link https://developers.notion.com/reference/post-page Create a page}
   */
  pageCreated: eventProperties<unknown>(),
});
