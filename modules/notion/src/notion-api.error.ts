import { createErrorType, errorProperties } from '@komore/error';

import { type NotionError } from './error/notion-error';
import { notionDomain } from './notion.domain';

/**
 * Notion API error
 */
export const notionApiError = createErrorType(notionDomain, {
  /**
   * Invalid token
   */
  invalidToken: errorProperties(),
  /**
   * Unhandled error
   */
  unhandledError: errorProperties<{
    /**
     * Notion error
     */
    readonly notionError: NotionError;
  }>(),
});
